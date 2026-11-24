const nodes = [
  { id: 'n1', x: 300, y: 90, label: '<Component />' },
  { id: 'n2', x: 470, y: 170, label: 'Firestore' },
  { id: 'n3', x: 430, y: 330, label: 'REST API' },
  { id: 'n4', x: 220, y: 400, label: 'useState()' },
  { id: 'n5', x: 90, y: 300, label: 'TypeScript' },
  { id: 'n6', x: 120, y: 140, label: 'GET /users' },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 2],
  [4, 1],
];

export default function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 560 480"
      className="w-full h-auto max-w-[520px] mx-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5B27" />
          <stop offset="100%" stopColor="#F0197A" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A5B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F0197A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#edgeGradient)"
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#edgeGradient)"
              strokeWidth="2"
              strokeDasharray="10 230"
              style={{
                animation: `pulse-line ${3.5 + (i % 4) * 0.6}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          </g>
        );
      })}

      {nodes.map((node, i) => (
        <g
          key={node.id}
          className="animate-float"
          style={{ animationDelay: `${i * 0.35}s`, transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle cx={node.x} cy={node.y} r="34" fill="url(#nodeGlow)" opacity="0.7" />
          <circle
            cx={node.x}
            cy={node.y}
            r="5.5"
            fill={i % 2 === 0 ? '#FF5B27' : '#F0197A'}
          />
          <text
            x={node.x}
            y={node.y - 16}
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11"
            fill="#4A3F52"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
