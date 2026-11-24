export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  tags: string[];
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-01',
    company: 'Ezemvelo KZN Wildlife',
    role: 'Software Developer / Web Developer',
    period: 'June 2026 — Present',
    tags: ['Software Development', 'Web Development', 'IT Support', 'Digital Transformation'],
    points: [
      'Developing and maintaining web applications and digital platforms.',
      "Managing and updating the organisation's intranet.",
      'Contributing to the redevelopment of the intranet into a modern, functional platform.',
      'Improving website responsiveness and usability.',
      'Troubleshooting website and application issues.',
      'Working closely with the IT department on cross-functional initiatives.',
      'Gaining practical first-line technical support experience.',
      'Assisting users with technical issues and workplace technology.',
      'Working with internal stakeholders to understand requirements.',
      'Contributing to digital transformation initiatives.',
      'Maintaining and improving internal digital systems.',
    ],
  },
  
{
  id: 'exp-03',
  company: 'MUT Innovation Lab (Best Brightness Project)',
  role: 'Software Developer Intern',
  period: 'March 2025 — November 2025',
  tags: [
    'Software Development',
    'React',
    'TypeScript',
    'Firebase',
    'E-Commerce',
    'POS Systems'
  ],
  points: [
    'Designed and developed a web-based e-commerce and Point-of-Sale (POS) application for a cleaning products business.',
    'Built responsive and interactive user interfaces using React, TypeScript and Tailwind CSS.',
    'Implemented Firebase and Cloud Firestore for database management and application data storage.',
    'Developed product management functionality to support the organisation and management of product information.',
    'Implemented barcode scanning functionality using QuaggaJS to support product identification and sales processing.',
    'Developed POS functionality to support in-store sales transactions and product processing.',
    'Worked on integrating frontend components with Firebase backend services.',
    'Designed and implemented reusable UI components using shadcn/ui.',
    'Improved application usability through responsive layouts and intuitive navigation.',
    'Participated in the development, testing, debugging and refinement of application features.',
    'Applied software development principles to build a functional business-oriented digital solution.'
  ],
},

  {
    id: 'exp-02',
    company: 'SD Creatives',
    role: 'Software Developer',
    period: 'January 2023- March 2025',
    tags: ['Application Development', 'APIs', 'Databases'],
    points: [
      'Designed and developed software applications end to end.',
      'Developed responsive web applications for varied client needs.',
      'Wrote clean, maintainable, well-structured code.',
      'Worked with relational databases to model and query application data.',
      'Developed and consumed REST APIs across services.',
      'Debugged and troubleshot applications through the release cycle.',
      'Implemented new application functionality from specification.',
      'Tested software and resolved defects before release.',
      'Worked with modern development tools and technologies.',
      'Collaborated closely with team members and clients.',
      'Participated fully in the software development lifecycle.',
    ],
  },
];
