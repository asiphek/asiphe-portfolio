export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'skill-lang',
    category: 'Programming & Web',
    description: 'Core languages for building interfaces and application logic.',
    skills: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C#'],
  },
  {
    id: 'skill-frameworks',
    category: 'Frameworks',
    description: 'Libraries and frameworks used to ship web and mobile products.',
    skills: ['React', 'React Native', 'Redux Toolkit', 'Vite'],
  },
  {
    id: 'skill-backend',
    category: 'Backend & Database',
    description: 'Services, storage and data layers behind the interface.',
    skills: ['SQL', 'Firebase Firestore', 'REST APIs', 'Node.js'],
  },
  {
    id: 'skill-tools',
    category: 'Development Tools',
    description: 'Day-to-day tooling for building, shipping and collaborating.',
    skills: ['Git', 'GitHub', 'npm', 'Expo'],
  },
];
