import { skillGroups } from '../data/skills';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow gradient-text mb-4">Technical Skills</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)]">
            Tools of the trade
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.id}
              className={`group relative rounded-2xl p-6 bg-[var(--color-cloud)] border border-[var(--color-line)] overflow-hidden hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(240,25,122,0.4)] ${
                visible ? 'fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${gi * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <h3 className="font-[var(--font-display)] font-semibold text-base text-[var(--color-ink)] group-hover:text-white transition-colors">
                  {group.category}
                </h3>
                <p className="text-xs mt-1.5 text-[var(--color-ink-soft)] group-hover:text-white/80 transition-colors leading-relaxed">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="eyebrow px-2.5 py-1.5 rounded-lg bg-white text-[var(--color-ink-soft)] group-hover:bg-white/20 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
