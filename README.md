# Brian Carlson site

The site uses Bun, React, TanStack Start and TanStack Router. From this directory:

```sh
bun install --frozen-lockfile
bun run dev          # development server: http://localhost:5173/
bun run build        # prerendered static site: dist/client/
bun run preview      # serve that static build: http://localhost:4174/
bun run typecheck
bun run test         # build and check content and routes
```

The build prerenders each experience, tag and other page to HTML in `dist/client/`. This directory contains the complete static output, including CNAME and a GitHub Pages 404 page. React hydrates the pages for navigation, filters and the carousel. Rebuild to update prerendered content; the preview serves the existing build and does not rebuild it.

The content build imports editable Markdown in `experiences/`. Edits are recompiled by the development server and included in subsequent builds. Each file has an explicit `slug` that preserves its URL independently of its title. `published-routes.json`, `published-overrides.json`, `published-details.json`, and `src/published-tags.json` retain reference data for the parity audit. Primer.ai was reconstructed from the published site because it was absent from the `build` branch.

The image build creates responsive WebP variants of the carousel originals in `public/optimized/`, without enlarging source images. This generated directory is ignored by Git and rebuilt by `bun run dev` and `bun run build`; the originals remain in `public/extracurricular/`. The first image is limited by its 1280-pixel-wide source, so a higher-resolution original would be needed for additional detail on high-density displays.

The GitHub Actions Pages workflow builds and publishes `dist/client/` on pushes to `main`. Generated output is not committed. The original Gridsome/Vue source and previous published files remain in Git history. Building and previewing locally do not publish the site.
