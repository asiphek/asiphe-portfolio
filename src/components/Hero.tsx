import NetworkGraphic from './NetworkGraphic';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 55% at 82% 12%, rgba(255,91,39,0.10), transparent 60%), radial-gradient(55% 50% at 8% 85%, rgba(240,25,122,0.10), transparent 60%), #FFFFFF',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <p className="eyebrow gradient-text mb-6">Software Developer · Durban, South Africa</p>
          <h1 className="font-[var(--font-display)] font-bold text-[2.6rem] leading-[1.08] sm:text-6xl text-[var(--color-ink)]">
            Hi, I'm Asiphe Khuboni.
          </h1>
          <p className="mt-4 font-[var(--font-display)] font-medium text-xl sm:text-2xl text-[var(--color-ink-soft)]">
            Software Developer <span className="text-[var(--color-orange)]">|</span> Application Developer
          </p>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-ink-soft)] max-w-xl leading-relaxed">
            I build modern digital experiences, web applications, and practical software
            solutions that solve real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 gradient-bg text-white font-[var(--font-display)] font-semibold px-7 py-3.5 rounded-full shadow-[0_12px_30px_-10px_rgba(240,25,122,0.55)] hover:shadow-[0_16px_36px_-8px_rgba(240,25,122,0.65)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-[var(--font-display)] font-semibold px-7 py-3.5 rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] hover:border-[var(--color-pink)] hover:text-[var(--color-pink)] transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 font-[var(--font-mono)] text-xs text-[var(--color-ink-soft)]">
            <span className="w-2 h-2 rounded-full gradient-bg animate-blink" />
            currently building at Ezemvelo KZN Wildlife
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-orange)]/8 to-[var(--color-pink)]/8 -z-10" />
          <NetworkGraphic />
        </div>
      </div>
    </section>
  );
}
