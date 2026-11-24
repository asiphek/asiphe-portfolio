export interface StatEntry {
  id: string;
  value: string;
  numeric?: number;
  suffix?: string;
  label: string;
}

export const stats: StatEntry[] = [
  { id: 'stat-years', value: '2+', numeric: 2, suffix: '+', label: 'Years Software Development Experience' },
  { id: 'stat-quals', value: '2', numeric: 2, label: 'IT Qualifications' },
  { id: 'stat-projects', value: 'Multiple', label: 'Software Projects' },
  { id: 'stat-platforms', value: 'Web + Mobile', label: 'Application Development' },
  { id: 'stat-experience', value: 'IT + Development', label: 'Technical Experience' },
];
