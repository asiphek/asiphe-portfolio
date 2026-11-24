export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  field: string;
  status: 'Completed';
  year: string;
}

export const education: EducationEntry[] = [
  {
    id: 'edu-01',
    institution: 'Mangosuthu University of Technology',
    qualification: 'Advanced Diploma in Information Technology',
    field: 'Application Development',
    status: 'Completed',
    year: '2025',
  },
  {
    id: 'edu-02',
    institution: 'Mangosuthu University of Technology',
    qualification: 'Diploma in Information Technology',
    field: 'Software Development',
    status: 'Completed',
    year: '2022'
  },
];
