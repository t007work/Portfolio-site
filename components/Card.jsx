export default function Card({ title, subtitle, badge, children }) {
  return (
    <article className="rounded-3xl border border-border bg-surface p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          {subtitle && <p className="text-base md:text-lg opacity-80">{subtitle}</p>}
        </div>
        {badge && <span className="text-sm md:text-base opacity-70">{badge}</span>}
      </div>
      {children}
    </article>
  );
}
