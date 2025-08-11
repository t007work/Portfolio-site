export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-none space-y-4 text-[15px] leading-relaxed opacity-90">
        {children}
      </div>
    </section>
  );
}
