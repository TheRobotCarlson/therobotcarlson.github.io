import content from "./content.json";
import projectOrder from "./project-order.json";

export type Entry = {
  title: string;
  position?: string;
  company?: string;
  subtitle?: string;
  excerpt?: string;
  date?: string | null;
  endDate?: string | null;
  img?: string;
  tags?: string[];
  kind: string;
  slug: string;
  html: string;
  github?: string;
  devpost?: string;
  website?: string;
  hours?: number;
};
export const entries = content as Entry[];
export const projects = projectOrder.flatMap((slug) =>
  entries.filter((entry) => entry.slug === slug),
);
export const tags = [...new Set(projects.flatMap((entry) => entry.tags || []))];
