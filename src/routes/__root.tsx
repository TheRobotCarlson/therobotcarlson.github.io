import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Layout } from "../layout";
import { NotFound } from "../site";
import css from "../style.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "therobotcarlson's website" },
      { title: "Brian Carlson" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: css },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});
function Root() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">
          <Layout />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
