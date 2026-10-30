import { Glob } from 'bun';
import matter from 'gray-matter';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
marked.use(gfmHeadingId());
import { mkdir, writeFile } from 'node:fs/promises';

const entries = [];
const seen = new Set<string>();
for await (const file of new Glob('experiences/**/*.md').scan('.')) {
  const { data, content } = matter(await Bun.file(file).text());
  const slug = data.slug;
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid or missing slug in ${file}`);
  if (seen.has(slug)) throw new Error(`Duplicate experience slug ${slug} in ${file}`);
  seen.add(slug);
  entries.push({ ...data, kind: file.split('/')[1], slug, html: await marked.parse(content), source: file });
}
await mkdir('src', { recursive: true });
await writeFile('src/content.json', JSON.stringify(entries, null, 2));
console.log(`Imported ${entries.length} experiences`);
