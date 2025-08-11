export default function SectionHeader({ kicker, title, subtitle, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`${alignCls} max-w-4xl`}>
      {kicker && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm md:text-base tracking-wide">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl leading-relaxed opacity-85">
          {subtitle}
        </p>
      )}
    </div>
  );
}
