import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--color-cloud)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow gradient-text mb-4">Featured Projects</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)]">
            Things I've built
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-white border border-[var(--color-line)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(240,25,122,0.4)] transition-all duration-400 ${
                visible ? 'fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      project.accent === 'orange'
                        ? 'linear-gradient(135deg, #FF8A5B 0%, #FF5B27 55%, #F0197A 100%)'
                        : 'linear-gradient(135deg, #FF5FA8 0%, #F0197A 55%, #FF5B27 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/10 transition-colors duration-400" />
                <span className="absolute bottom-4 left-6 font-[var(--font-display)] font-bold text-2xl text-white drop-shadow-sm">
                  {project.name}
                </span>
              </div>

              <div className="p-7">
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="eyebrow px-2.5 py-1 rounded-lg bg-[var(--color-cloud)] text-[var(--color-ink-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 opacity-90 group-hover:opacity-100">
                  <a
                    href="https://github.com/asiphek"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] hover:border-[var(--color-pink)] hover:text-[var(--color-pink)] transition-colors"
                  >
                    <GithubIcon size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full gradient-bg text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
