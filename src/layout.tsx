import { useEffect, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { entries } from "./data";
declare const __BUILD_TIME__: string;

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const entry =
      parts[0] === "experiences" && parts[1]
        ? entries.find((e) => e.slug === parts[1])
        : undefined;
    const titles: Record<string, string> = {
      "": "Home",
      projects: "Projects",
      experiences: "Brian Carlson",
      about: "About us",
      index2: "Hello, world!",
      "404": "Page Not Found",
    };
    document.title = `${entry?.title || (parts[0] === "tag" ? `Tag: ${decodeURIComponent(parts[1] || "")}` : titles[parts[0] || ""] || "Page Not Found")} - Brian Carlson`;
  }, [pathname]);
  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <nav>
          <button
            className="menu-toggle"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <Link className="logo" to="/">
            BRIAN (THE ROBOT) CARLSON
          </Link>
          <div className="desktop-nav">
            <a href="/#about">About</a>
            <a href="/projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="mailto:briancarlson6174@gmail.com">Contact</a>
          </div>
        </nav>
        {menuOpen && (
          <>
            <button
              className="menu-backdrop"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            />
            <aside className="mobile-menu" aria-label="Navigation">
              <Link
                className="mobile-logo"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                BRIAN (THE ROBOT) CARLSON
              </Link>
              <a href="/#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="/#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
              <a href="mailto:briancarlson6174@gmail.com">Contact</a>
            </aside>
          </>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer id="contact">
        Copyright {new Date(__BUILD_TIME__).getUTCFullYear()}. All rights
        reserved.{" "}
        <span className="footer-links">
          <a href="mailto:briancarlson6174@gmail.com" aria-label="Email">
            <i className="mdi mdi-email" />
          </a>
          <a href="https://github.com/therobotcarlson/" aria-label="GitHub">
            <i className="mdi mdi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/therobotcarlson"
            aria-label="LinkedIn"
          >
            <i className="mdi mdi-linkedin" />
          </a>
          <a href="https://devpost.com/TheRobotCarlson" aria-label="Devpost">
            <img src="/devpost.svg" alt="" />
          </a>
        </span>
      </footer>
    </>
  );
}
