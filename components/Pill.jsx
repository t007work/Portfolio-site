export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-base md:text-lg">
      {children}
    </span>
  );
}
