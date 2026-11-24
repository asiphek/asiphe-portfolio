import { education } from '../data/education';
import { useReveal } from '../hooks/useReveal';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow gradient-text mb-4">Education</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)]">
            Academic foundation
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px gradient-bg md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((entry, i) => (
              <div
                key={entry.id}
                className={`relative flex md:items-center md:justify-center ${
                  visible ? 'fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full gradient-bg ring-4 ring-white z-10" />

                <div
                  className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? 'md:mr-auto md:pr-2' : 'md:ml-auto md:pl-2'
                  }`}
                >
                  <div className="glass-card gradient-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(240,25,122,0.35)] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-xl gradient-bg flex items-center justify-center">
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="eyebrow text-[var(--color-pink)] mb-1">
                            {entry.institution}
                          </p>
                          <span className="shrink-0 text-xs font-semibold text-[var(--color-ink-soft)] bg-gray-100 rounded-full px-2.5 py-1">
                            {entry.year}
                          </span>
                        </div>
                        <h3 className="font-[var(--font-display)] font-semibold text-lg text-[var(--color-ink)] leading-snug">
                          {entry.qualification}
                        </h3>
                        <p className="text-sm text-[var(--color-ink-soft)] mt-1">{entry.field}</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                          <CheckCircle2 size={14} />
                          {entry.status}
                          <span className="text-[var(--color-ink-soft)] font-normal">
                            · {entry.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}