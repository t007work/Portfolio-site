export default function Footer({ email, linkedin }) {
  return (
    <footer className="mx-auto max-w-5xl px-4 pb-12 pt-6 text-sm opacity-80">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div>© {new Date().getFullYear()} Siri Pochareddy</div>
        <div className="flex gap-3">
          <a href="#top" className="underline underline-offset-4">Back to top</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn</a>
          <a href={`mailto:${email}`} className="underline underline-offset-4">Email</a>
        </div>
      </div>
    </footer>
  );
}
