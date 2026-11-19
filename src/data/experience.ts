export interface ExperienceEntry {
  company: string
  role: string
  period: string
  kind: 'work' | 'freelance' | 'education'
  responsibilities: string[]
  tech: string[]
  contributions?: string[]
}

/** Taken from your resume. Edit or add entries freely. */
export const experience: ExperienceEntry[] = [
  {
    company: 'Trogon Media Pvt. Ltd',
    role: 'PHP Developer',
    period: 'Nov 2025 – Now',
    kind: 'work',
    responsibilities: [
      'Worked on 20+ Learning Management System projects using CodeIgniter 3 and CodeIgniter 4.',
      'Supported 100+ LMS platforms as a support engineer: troubleshooting issues, shipping fixes and maintaining live systems.',
      'Developed and maintained LMS platforms with Zoom, Google Meet, Vimeo and YouTube recorded-class integrations.',
      'Implemented API integrations and backend services for course management, user authentication, live classes and video delivery.',
      'Worked on attendance tracking, scheduling, course access management and reporting features.',
    ],
    tech: ['PHP', 'CodeIgniter 3', 'CodeIgniter 4', 'MySQL', 'Zoom API', 'Google Meet API', 'Vimeo'],
    contributions: [
      'Built REST APIs for mobile and web applications.',
      'Collaborated with development teams to improve application performance and scalability.',
      'Managed MySQL databases and optimized queries for high-performance applications.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Application Developer',
    period: 'Freelance',
    kind: 'freelance',
    responsibilities: [
      'Developed an Attendance Management web application for a client using PHP and CodeIgniter.',
      'Integrated ZKTeco and ESSL biometric attendance devices.',
    ],
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
  },
  {
    company: 'University of Calicut',
    role: 'Bachelor of Computer Application (BCA)',
    period: '2020 – 2023',
    kind: 'education',
    responsibilities: ['Completed a BCA degree, building the foundation in programming, databases and web development.'],
    tech: ['PHP', 'Python', 'Java', 'MySQL'],
  },
]
