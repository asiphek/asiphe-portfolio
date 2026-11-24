import { stats } from '../data/stats';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({
  value,
  numeric,
  suffix,
  label,
  visible,
  delay,
}: {
  value: string;
  numeric?: number;
  suffix?: string;
  label: string;
  visible: boolean;
  delay: number;
}) {
  const count = useCountUp(numeric, visible);

  return (
    <div
      className={`text-center px-2 min-w-0 ${visible ? 'fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl lg:text-5xl gradient-text break-words leading-tight">
        {numeric !== undefined ? `${count}${suffix ?? ''}` : value}
      </p>
      <p className="mt-3 text-sm text-white/70 leading-snug max-w-[12rem] mx-auto">{label}</p>
    </div>
  );
}

export default function CareerHighlights() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);

  return (
    <section className="py-24 md:py-28 bg-[var(--color-ink)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(50% 60% at 15% 20%, rgba(255,91,39,0.25), transparent 60%), radial-gradient(50% 60% at 85% 80%, rgba(240,25,122,0.25), transparent 60%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow gradient-text mb-4">Career Highlights</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-white">
            The numbers so far
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.id} visible={visible} delay={i * 0.1} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}