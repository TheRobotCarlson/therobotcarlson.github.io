/** Match any selected tag, as in the original projects page. */
export function filterProjects<T extends { tags?: string[] }>(projects: T[], selected: string[]): T[] {
  return selected.length ? projects.filter(project => selected.some(tag => project.tags?.includes(tag))) : projects;
}
