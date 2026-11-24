import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-lg shadow-[0_2px_24px_-8px_rgba(240,25,122,0.18)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <button
          onClick={() => handleNav('home')}
          className="font-[var(--font-display)] font-bold text-lg tracking-tight text-[var(--color-ink)]"
        >
          ASIPHE <span className="gradient-text">KHUBONI</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className="eyebrow relative py-2 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] gradient-bg transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[var(--color-ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white/95 backdrop-blur-lg border-t border-[var(--color-line)] ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`eyebrow ${active === item.id ? 'gradient-text' : 'text-[var(--color-ink-soft)]'}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
