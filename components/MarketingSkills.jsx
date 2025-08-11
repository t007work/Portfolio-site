"use client";

export default function MarketingSkills({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((s) => (
        <div
          key={s}
          className="flex-1 sm:flex-none max-w-[560px] rounded-3xl border border-border bg-surface/80 p-7 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-border/60"
        >
          <h3 className="text-xl md:text-2xl font-semibold leading-snug">{s}</h3>
        </div>
      ))}
    </div>
  );
}
