export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[var(--font-display)] font-semibold text-white/90 text-sm">
          ASIPHE <span className="gradient-text">KHUBONI</span>
        </p>
        <p className="text-xs text-white/40 font-[var(--font-mono)]">
          © {new Date().getFullYear()} Asiphe Khuboni. Built with React &amp; TypeScript.
        </p>
      </div>
    </footer>
  );
}
