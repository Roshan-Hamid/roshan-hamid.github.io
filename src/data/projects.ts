/**
 * Project case studies. Names are anonymized and descriptions are editable.
 * No client names, confidential details or performance statistics are included.
 */
export type ProjectVisual = 'lms' | 'exam' | 'crm' | 'live' | 'db' | 'attendance' | 'mobile'

export interface Project {
  id: string
  number: string
  category: string
  title: string
  description: string
  overview: string
  features: string[]
  tech: string[]
  contributions: string[]
  visual: ProjectVisual
}

export const projects: Project[] = [
  {
    id: 'lms',
    number: '01',
    category: 'Education Technology',
    title: 'Learning Management System',
    description:
      'A comprehensive LMS platform designed to manage online education, courses, students, lessons, enrollments, and learning progress.',
    overview:
      'A full learning platform covering the student journey: browsing packages and paying, enrolment and lesson delivery, progress tracking and dashboards.',
    features: [
      'Course management',
      'Student management',
      'Enrollment management',
      'Package and payment systems',
      'Lesson and video management',
      'Student dashboards',
      'Learning progress tracking',
      'Role-based access control',
    ],
    tech: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'Bootstrap', 'REST APIs'],
    contributions: [
      'Developed and maintained LMS platforms on CodeIgniter 3 and 4',
      'Built backend services for course management, authentication and student progress',
      'Implemented role-based access and course access management',
    ],
    visual: 'lms',
  },
  {
    id: 'exam',
    number: '02',
    category: 'EdTech / Assessment',
    title: 'Online Examination Platform',
    description:
      'An online examination and practice platform supporting question banks, mock exams, student assessments, and result processing.',
    overview:
      'A timed assessment system where students practise and sit mock exams, with results and certificates produced automatically.',
    features: [
      'Large question bank management',
      'Online mock examinations',
      'Practice modules',
      'Exam timers',
      'Answer submission',
      'Marked-for-review functionality',
      'Result processing',
      'Certificate generation',
    ],
    tech: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'REST APIs'],
    contributions: [
      'Implemented exam flow, timers and answer submission logic',
      'Built result processing and certificate generation',
      'Designed question-bank data structures',
    ],
    visual: 'exam',
  },
  {
    id: 'crm',
    number: '03',
    category: 'Business Automation',
    title: 'Payment & Counselor CRM',
    description:
      'A payment and lead management system designed to simplify counselor workflows and track student registrations and payments.',
    overview:
      'A CRM where counselors generate payment links, attribute registrations to the right counselor, and follow each lead through payment and fulfilment.',
    features: [
      'Razorpay integration',
      'Dynamic payment links',
      'Course and product payments',
      'Lead management',
      'Counselor attribution',
      'Payment tracking',
      'Registration and fulfillment status',
    ],
    tech: ['PHP', 'CodeIgniter 4', 'MySQL', 'Razorpay API', 'REST APIs'],
    contributions: [
      'Integrated the Razorpay API and dynamic payment-link generation',
      'Built lead, attribution and payment-tracking workflows',
    ],
    visual: 'crm',
  },
  {
    id: 'live',
    number: '04',
    category: 'Video Technology',
    title: 'Live Class & Video Integration',
    description:
      'A system integrating online classes, attendance synchronization, video recording management, and cloud video services.',
    overview:
      'Connects live-class providers and video hosts to the learning platform so sessions, attendance and recordings stay in sync.',
    features: [
      'Zoom integration',
      'Google Meet integration',
      'Attendance synchronization',
      'Recording management',
      'Vimeo video processing',
      'Automated recording workflows',
    ],
    tech: ['PHP', 'CodeIgniter 4', 'Zoom API', 'Google Meet API', 'Vimeo API', 'MySQL'],
    contributions: [
      'Integrated Zoom, Google Meet, Vimeo and YouTube recorded-class systems',
      'Built attendance sync and recording workflows',
    ],
    visual: 'live',
  },
  {
    id: 'db',
    number: '05',
    category: 'Backend Engineering',
    title: 'Database Performance Optimization',
    description: 'Database performance improvements for applications handling large datasets and complex queries.',
    overview:
      'Analysing and improving how applications query large MySQL databases: finding slow queries, adding the right indexes and tidying structures.',
    features: [
      'SQL query analysis',
      'Slow query logging',
      'Index optimization',
      'Query performance monitoring',
      'Large database handling',
      'Database structure improvements',
    ],
    tech: ['MySQL', 'PHP', 'CodeIgniter 4'],
    contributions: [
      'Managed MySQL databases and optimized queries for high-performance applications',
      'Worked with teams to improve application performance and scalability',
    ],
    visual: 'db',
  },
  {
    id: 'attendance',
    number: '06',
    category: 'Biometric Integration',
    title: 'Attendance Management Web App',
    description:
      'A freelance PHP web application for managers and admins to view and manage attendance across branches, synced from biometric devices.',
    overview:
      'Built for a freelance client. Pulls attendance from ZKTeco and ESSL biometric devices and gives managers a clear, printable view per branch and employee.',
    features: [
      'ZKTeco and ESSL biometric device integration',
      'Attendance view across multiple branches',
      'Edit attendance, create branches and employees',
      'Printable monthly attendance with total hours per person',
    ],
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
    contributions: ['Designed and developed the application as a freelancer'],
    visual: 'attendance',
  },
  {
    id: 'mobile',
    number: '07',
    category: 'Mobile & Web',
    title: 'On-Road Fuel Demand App',
    description:
      'An Android application that helps drivers request fuel and services easily, overseen through a companion web application.',
    overview:
      'A mobile app for drivers with a web dashboard for oversight, backed by MySQL. An earlier project built with Android Studio and Python Flask.',
    features: [
      'Drivers request fuel and services from the app',
      'Companion web application for oversight',
      'MySQL-backed data layer',
    ],
    tech: ['Android Studio', 'Python Flask', 'MySQL'],
    contributions: ['Built the Android app, Flask backend and web dashboard'],
    visual: 'mobile',
  },
]
