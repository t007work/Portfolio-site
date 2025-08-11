import Image from "next/image";

export default function TechnicalSkills({ items = [] }) {
  if (!items.length) return null;

  // First 4 items go to row 1, rest go to row 2
  const row1 = items.slice(0, 4);
  const row2 = items.slice(4);

  const Card = ({ item }) => (
    <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface/70">
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10 shrink-0">
          <Image src={item.icon} alt="" fill className="object-contain" />
        </div>
        <span className="text-base md:text-lg leading-snug">{item.label}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Row 1 - 4 items aligned normally */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {row1.map((item) => (
          <Card key={item.label} item={item} />
        ))}
      </div>

      {/* Row 2 - centered */}
      {row2.length > 0 && (
        <div className="flex justify-center gap-6 flex-wrap">
          {row2.map((item) => (
            <div
              key={item.label}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
