import { useEffect, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import publishedTags from "./published-tags.json";
import { entries, projects, tags } from "./data";
import { Card, CategoryScroller, Chips } from "./components";
import { Carousel } from "./carousel";
import { formatDate, workDate, WorkTimeline } from "./timeline";
import { filterProjects } from "./filter-projects";

export function Home() {
  const featured = ["med-check", "re-search", "fret-visualizer"];
  const projects = featured.flatMap((slug) =>
    entries.filter((e) => e.slug === slug),
  );
  return (
    <>
      <section id="about" className="hero">
        <Carousel />
        <div>
          <h1>
            I'm Brian Carlson.
            <br />
            <span>Cofounder &amp; Technical Lead</span>
          </h1>
          <p>
            I build software across healthcare, data science, AI, and
            engineering. I'm now building{" "}
            <a href="https://truer.co">Truer Health</a> as Cofounder and
            Technical Lead.
          </p>
          <p>
            I've worked on everything from data pipelines and financial tools to
            3D point clouds, and I love applying technology to new problems.
          </p>
          <a className="hero-link" href="https://truer.co">
            Visit Truer Health <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <img className="node-separator" src="/node-separator.svg" alt="" />
      <section id="projects">
        <h1>Projects</h1>
        <h2>A few things I’ve built.</h2>
        <div className="grid">
          {projects.map((e) => (
            <Card key={e.slug} entry={e} />
          ))}
        </div>
        <Link to="/projects">Explore all projects</Link>
      </section>
      <div className="separator" />
      <section id="experience">
        <h1>Work Experience</h1>
        <h4>A selection of the places I’ve worked.</h4>
        <WorkTimeline />
      </section>
    </>
  );
}
export function Projects() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const tag = new URLSearchParams(window.location.search).get("tag");
    if (tag && tags.includes(tag)) setSelected([tag]);
  }, []);
  const filtered = filterProjects(projects, selected);
  return (
    <section className="project-list">
      {selected.length > 0 && (
        <div className="chips">
          {selected.map((t) => (
            <button
              key={t}
              onClick={() => {
                setSelected(selected.filter((x) => x !== t));
                setSearch("");
              }}
            >
              {t} ×
            </button>
          ))}
        </div>
      )}
      <input
        aria-label="Search tags"
        placeholder="Search tags"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CategoryScroller
        items={tags.filter(
          (t) =>
            t.toLowerCase().includes(search.toLowerCase()) &&
            !selected.includes(t),
        )}
        select={(t) => {
          setSelected([...selected, t]);
          setSearch("");
        }}
      />
      <div className="grid">
        {filtered.map((e) => (
          <Card key={e.slug} entry={e} />
        ))}
      </div>
    </section>
  );
}
export function Work() {
  return (
    <section>
      <h1>Work Experience</h1>
      <h4>A selection of the places I’ve worked.</h4>
      <WorkTimeline />
    </section>
  );
}
export function Detail() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const e = entries.find((x) => x.slug === slug);
  if (!e) return <NotFound />;
  return (
    <section className="detail">
      <h1>{e.kind === "work" ? e.position : e.title}</h1>
      <h2>{e.company || e.subtitle}</h2>
      <p className="detail-date">
        {e.kind === "work" ? workDate(e) : formatDate(e.date)}
      </p>
      {e.website && (
        <a
          className="external-link"
          href={e.website}
          target="_blank"
          rel="noreferrer"
        >
          Visit {e.company || e.title} ↗
        </a>
      )}
      <Chips tags={e.tags} />
      <div className="markdown" dangerouslySetInnerHTML={{ __html: e.html }} />
    </section>
  );
}
export function Tag() {
  const { tag } = useParams({ strict: false }) as { tag: string };
  const page = Object.values(publishedTags).find(
    (t) => decodeURIComponent(t.slug) === tag,
  );
  const label =
    Object.entries(publishedTags).find(([, value]) => value === page)?.[0] ||
    tag;
  const matching = entries.filter((e) => e.tags?.includes(label));
  if (!page && !matching.length) return <NotFound />;
  const order: string[] = page?.entries || [];
  const matches = [
    ...order.flatMap((slug) => matching.filter((e) => e.slug === slug)),
    ...matching.filter((e) => !order.includes(e.slug)),
  ];
  return (
    <section className="tag-page">
      <h2>
        Experiences with: {label.charAt(0).toUpperCase() + label.slice(1)} (
        {matches.length})
      </h2>
      <div className="grid">
        {matches.map((e) => (
          <Card key={e.slug} entry={e} />
        ))}
      </div>
    </section>
  );
}
export function LegacyRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);
  return (
    <section>
      <h1>Page moved</h1>
      <p>
        Find out more <a href="/#about">on the home page</a>.
      </p>
    </section>
  );
}
export function NotFound() {
  return (
    <section className="not-found">
      <h2>Page Not Found</h2>
      <img src="/404.svg" alt="404 page not found" />
    </section>
  );
}
