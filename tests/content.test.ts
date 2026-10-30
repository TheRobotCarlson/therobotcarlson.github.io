import { expect, test } from 'bun:test';
import content from '../src/content.json';
import routes from '../published-routes.json';
import tags from '../src/published-tags.json';
import projectOrder from '../src/project-order.json';

const slugs = new Set(content.map(entry => entry.slug));
test('every published experience has exactly one imported entry', () => {
  expect(slugs.size).toBe(content.length);
  expect(slugs).toEqual(new Set(Object.values(routes)));
});
test('published tags refer to imported experiences in their published order', () => {
  for (const page of Object.values(tags)) {
    expect(page.entries.length).toBe(page.count);
    for (const slug of page.entries) expect(slugs.has(slug)).toBe(true);
  }
});
test('published project list contains only project entries', () => {
  for (const slug of projectOrder) expect(content.find(entry => entry.slug === slug)?.kind).toBe('projects');
});
test('detail content retains heading anchors', () => {
  expect(content.find(entry => entry.slug === 'med-check')?.html).toContain('id="what-it-does"');
});

test('published experience and tag URLs have built entry points', async () => {
  for (const slug of Object.values(routes)) {
    expect(await Bun.file(`dist/client/experiences/${slug}/index.html`).exists()).toBe(true);
  }
  for (const tag of Object.values(tags)) {
    expect(await Bun.file(`dist/client/tag/${decodeURIComponent(tag.slug)}/index.html`).exists()).toBe(true);
  }
});

test('all imported detail pages retain published headings and metadata', async () => {
  const details = await Bun.file('published-details.json').json() as Record<string, {position?: string; company?: string; subtitle?: string; date?: string | null; endDate?: string | null}>;
  for (const entry of content) {
    const published = details[entry.title];
    expect(published).toBeDefined();
    expect(entry.position ?? null).toBe(published.position ?? null);
    expect(entry.company ?? null).toBe(published.company ?? null);
    expect(entry.subtitle ?? null).toBe(published.subtitle ?? null);
    expect(entry.date ?? null).toBe(published.date ?? null);
    expect(entry.endDate ?? null).toBe(published.endDate ?? null);
  }
});

test('built route entry points carry their published page titles', async () => {
  expect(await Bun.file('dist/client/index.html').text()).toContain('<title>Home - Brian Carlson</title>');
  expect(await Bun.file('dist/client/experiences/med-check/index.html').text()).toContain('<title>MedCheck - Brian Carlson</title>');
  expect(await Bun.file('dist/client/tag/python/index.html').text()).toContain('<title>Tag: python - Brian Carlson</title>');
  expect(await Bun.file('dist/client/404.html').text()).toContain('<title>Page Not Found - Brian Carlson</title>');
});

test('project filters match any selected tag and clear back to the full list', async () => {
  const { filterProjects } = await import('../src/filter-projects');
  const sample = [{tags: ['python']}, {tags: ['c++']}, {tags: ['python', 'c++']}, {tags: ['java']}];
  expect(filterProjects(sample, ['python', 'c++'])).toEqual(sample.slice(0, 3));
  expect(filterProjects(sample, ['c++'])).toEqual(sample.slice(1, 3));
  expect(filterProjects(sample, [])).toEqual(sample);
});

test('tags present in content but absent from the published route inventory get an entry point', async () => {
  expect(await Bun.file('dist/client/tag/.net/index.html').exists()).toBe(true);
});


test('every published page contains prerendered content', async () => {
  const home = await Bun.file('dist/client/index.html').text();
  expect(home).toContain('Software Engineer');
  expect(home).toContain('srcSet=');
  for (const entry of content) {
    const html = await Bun.file(`dist/client/experiences/${entry.slug}/index.html`).text();
    expect(html).toContain((entry.kind === 'work' ? entry.position : entry.title)?.replaceAll('&', '&amp;').replaceAll("'", '&#x27;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;') || '');
  }
  for (const [label, tag] of Object.entries(tags)) {
    const html = await Bun.file(`dist/client/tag/${decodeURIComponent(tag.slug)}/index.html`).text();
    expect(html).toContain('Experiences with:');
    expect(html.replaceAll('<!-- -->', '')).toContain(`(${tag.count})`);
  }
});
