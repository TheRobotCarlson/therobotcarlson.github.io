import moment from "moment";
import { entries, type Entry } from "./data";
import { Card } from "./components";

export function formatDate(date?: string | null) {
  return date ? moment.utc(date).format("MMM YYYY") : "";
}
export function workDate(entry: Entry) {
  if (!entry.date)
    return entry.endDate ? `Until ${formatDate(entry.endDate)}` : "Present";
  return `${formatDate(entry.date)} – ${entry.endDate ? formatDate(entry.endDate) : "Present"}`;
}
export function WorkTimeline() {
  const work = entries
    .filter((entry) => entry.kind === "work")
    .sort((a, b) => {
      if (!a.endDate && b.endDate) return -1;
      if (a.endDate && !b.endDate) return 1;
      return (b.endDate || b.date || "").localeCompare(
        a.endDate || a.date || "",
      );
    });
  return (
    <div className="timeline">
      {work.map((entry) => (
        <div className="timeline-row" key={entry.slug}>
          <div className="timeline-date">{workDate(entry)}</div>
          <div className="timeline-dot">
            {entry.img && (
              <img src={"/work/" + entry.img} loading="lazy" alt="" />
            )}
          </div>
          <Card entry={entry} />
        </div>
      ))}
    </div>
  );
}
