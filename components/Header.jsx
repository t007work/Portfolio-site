// components/Header.jsx
// -------------------------------------------------
export default function Header({ email, linkedin }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-950/60 border-b border-gray-200/60 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">Siri Pochareddy</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {[
            ["About", "about"],
            ["Projects", "projects"],
          ].map(([label, href]) => (
            <a key={href} href={`#${href}`} className="hover:opacity-70">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-3 py-1.5 text-sm font-medium shadow-sm hover:opacity-90"
        >
          Email me
        </a>
      </div>
    </header>
  );
}