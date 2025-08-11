export default function SkillsGrid({ skills = {} }) {
  const entries = Object.entries(skills || {});
  if (!entries.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {entries.map(([key, list]) => (
        <div key={key} className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="mb-3 font-semibold capitalize">{key.replace("_", " ")}</h3>
          <ul className="space-y-2 text-sm">
            {list.map((s) => (
              <li key={s} className="leading-relaxed">• {s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
