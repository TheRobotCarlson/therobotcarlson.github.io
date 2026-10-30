import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Entry } from "./data";

function ScrollRow({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: false, right: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setBounds({
        left: el.scrollLeft > 1,
        right: el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
      });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update);
    update();
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [children]);
  return (
    <div className="chip-scroller">
      <button
        className="chip-next"
        aria-label={`Scroll ${label} backward`}
        disabled={!bounds.left}
        onClick={() =>
          ref.current?.scrollBy({ left: -200, behavior: "smooth" })
        }
      >
        ‹
      </button>
      <div className="chips" ref={ref}>
        {children}
      </div>
      <button
        className="chip-next"
        aria-label={`Scroll ${label} forward`}
        disabled={!bounds.right}
        onClick={() => ref.current?.scrollBy({ left: 200, behavior: "smooth" })}
      >
        ›
      </button>
    </div>
  );
}
export function Chips({ tags: items = [] }: { tags?: string[] }) {
  return (
    <ScrollRow label="tags">
      {items.map((tag) => (
        <Link key={tag} to="/tag/$tag" params={{ tag }}>
          {tag}
        </Link>
      ))}
    </ScrollRow>
  );
}
export function CategoryScroller({
  items,
  select,
}: {
  items: string[];
  select: (tag: string) => void;
}) {
  return (
    <div className="categories">
      <ScrollRow label="available tags">
        {items.map((t) => (
          <button key={t} onClick={() => select(t)}>
            {t}
          </button>
        ))}
      </ScrollRow>
    </div>
  );
}
export function Card({ entry }: { entry: Entry }) {
  return (
    <article className="card">
      <h2>
        <Link to="/experiences/$slug" params={{ slug: entry.slug }}>
          {entry.kind === "work" ? entry.position : entry.title}
        </Link>
      </h2>
      {entry.kind === "work" && <h3>{entry.company}</h3>}
      <p dangerouslySetInnerHTML={{ __html: entry.excerpt || "" }} />
      <Chips tags={entry.tags} />
      <div className="card-actions">
        <Link
          className="more"
          to="/experiences/$slug"
          params={{ slug: entry.slug }}
        >
          Learn more
        </Link>
        <div>
          {entry.github && (
            <a
              href={entry.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="mdi mdi-github" />
            </a>
          )}
          {entry.website && (
            <a
              href={entry.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${entry.company || entry.title} website`}
            >
              <i className="mdi mdi-web" />
            </a>
          )}
          {entry.devpost && (
            <a
              href={entry.devpost}
              target="_blank"
              rel="noreferrer"
              aria-label="Devpost"
            >
              <img src="/devpost.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
