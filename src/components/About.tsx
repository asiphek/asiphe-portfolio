import { useReveal } from '../hooks/useReveal';
import { Code2, Database, Wrench, Sparkles, Calendar, MapPin, Briefcase } from 'lucide-react';
import profileImg from '../assets/crop.jpeg';

const highlights = [
  { icon: Code2, label: 'Application & Web Development' },
  { icon: Database, label: 'Databases & API Integration' },
  { icon: Wrench, label: 'Technical Support & Troubleshooting' },
  { icon: Sparkles, label: 'Continuous Learning' },
];

const personalInfo = [
  { icon: Calendar, label: 'Birthday', value: '19 April 2002' },
  { icon: MapPin, label: 'Location', value: 'Durban, KZN, South Africa' },
  { icon: Briefcase, label: 'Employed At', value: 'Ezemvelo Wildlife' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-cloud)]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start ${
          visible ? 'fade-up' : 'opacity-0'
        }`}
      >
        {/* Left Column — Profile Card */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-square max-w-sm mx-auto rounded-[2rem] gradient-border glass-card p-6 flex flex-col items-center justify-center text-center">
            {/* Profile Image - Made larger */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-pink)] shadow-[0_16px_30px_-10px_rgba(240,25,122,0.5)]">
              <img
                src={profileImg}
                alt="Asiphe Khuboni"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-4 font-[var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">
              Asiphe Khuboni
            </p>
            <p className="eyebrow text-[var(--color-ink-soft)] mt-1">Software Developer</p>

            {/* Personal Info Cards */}
            <div className="mt-6 w-full space-y-2">
              {personalInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2 border border-[var(--color-line)] text-left"
                >
                  <Icon size={18} className="text-[var(--color-pink)] flex-shrink-0" />
                  <span className="text-sm text-[var(--color-ink-soft)]">
                    <span className="font-medium text-[var(--color-ink)]">{label}:</span> {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 w-full">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 bg-white/70 rounded-xl px-3 py-3 border border-[var(--color-line)]"
                >
                  <Icon size={18} className="text-[var(--color-pink)]" />
                  <span className="text-[10px] leading-tight text-[var(--color-ink-soft)] text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — About Text */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow gradient-text mb-4">About Me</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)] mb-6">
            A developer who builds things people actually use.
          </h2>
          <div className="space-y-4 text-[var(--color-ink-soft)] leading-relaxed">
            <p>
              I'm a software and application developer with a background spanning web
              development, database-driven applications and API integration. My work sits at
              the intersection of practical problem-solving and clean, maintainable code —
              I like taking a real operational need and turning it into software people rely on
              every day.
            </p>
            <p>
              Born <strong className="text-[var(--color-ink)]">19 April 2002</strong> and raised in{' '}
              <strong className="text-[var(--color-ink)]">Durban, KZN</strong>, I currently bring my
              development skills to <strong className="text-[var(--color-ink)]">Ezemvelo Wildlife</strong>,
              where I contribute to systems that support conservation and operational efficiency.
            </p>
            <p>
              Alongside development, I've worked in professional IT environments where I've
              gained hands-on technical support exposure: troubleshooting systems, assisting
              users, and keeping internal digital platforms running smoothly. That combination
              of build-it and support-it experience shapes how I approach every project —
              with an eye for reliability, not just features.
            </p>
            <p>
              I'm a continuous learner by habit, regularly picking up new frameworks and
              tools to keep pace with how software is actually built today, from React and
              TypeScript on the frontend to Firebase and REST APIs underneath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}