import { experience } from '../data/experience';
import { useReveal } from '../hooks/useReveal';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--color-cloud)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow gradient-text mb-4">Professional Experience</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)]">
            Where the work has happened
          </h2>
        </div>

        <div ref={ref} className="space-y-8">
          {experience.map((entry, i) => (
            <div
              key={entry.id}
              className={`glass-card gradient-border rounded-3xl p-8 md:p-10 ${
                visible ? 'fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <div className="flex items-center gap-4 md:flex-col md:items-start md:w-56 shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-bold text-xl text-[var(--color-ink)]">
                      {entry.company}
                    </h3>
                    <p className="text-sm text-[var(--color-ink-soft)] mt-1">{entry.role}</p>
                    <p className="eyebrow gradient-text mt-2">{entry.period}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="eyebrow px-3 py-1.5 rounded-full bg-white border border-[var(--color-line)] text-[var(--color-ink-soft)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)] leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
