const items = [
  { name: "Excel", fill: "#1D6F42", glyph: "E" },
  { name: "PowerPoint", fill: "#D24726", glyph: "P" },
  { name: "Word", fill: "#2B579A", glyph: "W" },
  { name: "Teams", fill: "#4B69C6", glyph: "T" },
  { name: "Canva", fill: "#00C4CC", glyph: "C" },
  { name: "Photoshop", fill: "#001E36", glyph: "Ps" },
  { name: "ABSS", fill: "#6E59A5", glyph: "A" },
];

function Badge({ name, fill, glyph }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <svg width="28" height="28" viewBox="0 0 40 40" className="shrink-0">
        <rect x="2" y="2" width="36" height="36" rx="9" style={{ fill }} />
        <text x="50%" y="58%" textAnchor="middle" fontFamily="ui-sans-serif" fontWeight="700" fontSize="16" fill="#fff">
          {glyph}
        </text>
      </svg>
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((it) => (
        <Badge key={it.name} {...it} />
      ))}
    </div>
  );
}
