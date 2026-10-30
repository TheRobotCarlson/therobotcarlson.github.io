# Brian Carlson's website

The React migration lives in [`modern/`](modern/). It uses Bun, React, and TanStack Start and TanStack Router. To run it locally:

```sh
cd modern
bun install --frozen-lockfile
bun run dev
```

The development server prints its local URL. Run `bun run build` and `bun run preview` to inspect the prerendered static site at http://localhost:4174/. Run `bun run test` to build the site and run the content and route checks. See [the migration README](modern/README.md) for the content workflow and production build details.

GitHub Pages publishes the generated files at the repository root from `main`. The original Gridsome/Vue source remains on the `build` branch and the earlier published site remains in Git history.
