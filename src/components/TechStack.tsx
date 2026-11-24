import { stackNodes } from '../data/techStack';
import { useReveal } from '../hooks/useReveal';

const RADIUS = 190;
const CENTER = 220;

function polarPoint(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export default function TechStack() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center mb-16">
        <p className="eyebrow gradient-text mb-4">Developer Stack</p>
        <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)]">
          My tech stack, connected
        </h2>
      </div>

      <div ref={ref} className={`flex justify-center ${visible ? 'fade-up' : 'opacity-0'}`}>
        <svg viewBox="0 0 440 440" className="w-full max-w-[440px] h-auto">
          <defs>
            <linearGradient id="stackEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5B27" />
              <stop offset="100%" stopColor="#F0197A" />
            </linearGradient>
          </defs>

          {stackNodes.map((node) => {
            const p = polarPoint(node.angle, RADIUS);
            return (
              <line
                key={`edge-${node.id}`}
                x1={CENTER}
                y1={CENTER}
                x2={p.x}
                y2={p.y}
                stroke="url(#stackEdge)"
                strokeOpacity="0.22"
                strokeWidth="1.5"
              />
            );
          })}

          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-spin-slow"
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          />

          <circle cx={CENTER} cy={CENTER} r="58" fill="url(#stackEdge)" opacity="0.12" />
          <circle cx={CENTER} cy={CENTER} r="44" fill="white" stroke="url(#stackEdge)" strokeWidth="2" />
          <text
            x={CENTER}
            y={CENTER - 3}
            textAnchor="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="700"
            fontSize="12.5"
            fill="var(--color-ink)"
          >
            ASIPHE'S
          </text>
          <text
            x={CENTER}
            y={CENTER + 13}
            textAnchor="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="700"
            fontSize="12.5"
            fill="var(--color-ink)"
          >
            TECH STACK
          </text>

          {stackNodes.map((node, i) => {
            const p = polarPoint(node.angle, RADIUS);
            return (
              <g
                key={node.id}
                className="animate-float"
                style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${p.x}px ${p.y}px` }}
              >
                <circle cx={p.x} cy={p.y} r="26" fill="white" stroke="var(--color-line)" strokeWidth="1" />
                <circle cx={p.x} cy={p.y} r="4" fill={i % 2 === 0 ? '#FF5B27' : '#F0197A'} />
                <text
                  x={p.x}
                  y={p.y + 38}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10.5"
                  fill="var(--color-ink-soft)"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
