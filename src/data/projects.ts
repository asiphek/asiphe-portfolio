export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  accent: 'orange' | 'pink';
}

export const projects: ProjectEntry[] = [
  {
    id: 'proj-best-brightness',
    name: 'Best Brightness',
    description:
      'A premium LED lighting e-commerce store offering high-quality lighting solutions for homes, offices, and commercial spaces.',
    tech: ['React', 'TypeScript', 'Bootstrap', 'Expo'],
    features: [
      'Product catalog with detailed specifications and pricing',
      'Shopping cart with real-time total calculations',
      'Responsive design optimized for all devices',
      'Secure checkout process'
    ],
    github: '#',
    demo: 'https://bestbrightness.store/',
    accent: 'orange',
  },
];