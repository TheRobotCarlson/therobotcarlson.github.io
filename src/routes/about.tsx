import { createFileRoute } from "@tanstack/react-router";
import { LegacyRedirect } from "../site";
export const Route = createFileRoute("/about")({
  component: LegacyRedirect,
  head: () => ({
    meta: [
      { title: "Page moved - Brian Carlson" },
      { httpEquiv: "refresh", content: "0; url=/#about" },
    ],
  }),
});
