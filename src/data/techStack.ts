export interface StackNode {
  id: string;
  label: string;
  angle: number;
}

export const stackNodes: StackNode[] = [
  { id: 'stack-react', label: 'React', angle: 0 },
  { id: 'stack-ts', label: 'TypeScript', angle: 40 },
  { id: 'stack-native', label: 'React', angle: 80 },
  { id: 'stack-firebase', label: 'Firebase', angle: 120 },
  { id: 'stack-node', label: 'Node.js', angle: 160 },
  { id: 'stack-sql', label: 'SQL', angle: 200 },
  { id: 'stack-java', label: 'Java', angle: 240 },
  { id: 'stack-git', label: 'Git', angle: 280 },
  { id: 'stack-vite', label: 'Vite', angle: 320 },
];
