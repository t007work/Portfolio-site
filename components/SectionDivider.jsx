export default function SectionDivider() {
  return (
    <div className="relative h-16 md:h-24">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="mx-auto h-px w-[92%] max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
