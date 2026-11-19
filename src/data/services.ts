import { Blocks, Cable, CreditCard, Database, GraduationCap, Layers, Link2, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  { title: 'Full-Stack Web Development', description: 'End-to-end web applications, from database design to a polished interface.', icon: Layers },
  { title: 'Backend Development', description: 'Secure, maintainable server-side systems built on clean MVC architecture.', icon: Blocks },
  { title: 'REST API Development', description: 'Well-structured APIs for web and mobile clients, including Flutter apps.', icon: Cable },
  { title: 'LMS Development', description: 'Course, student, enrollment, live-class and progress-tracking platforms.', icon: GraduationCap },
  { title: 'Payment Gateway Integration', description: 'Razorpay payments, dynamic payment links and payment tracking.', icon: CreditCard },
  { title: 'Database Optimization', description: 'Query analysis, indexing and schema improvements for large datasets.', icon: Database },
  { title: 'Third-Party API Integration', description: 'Zoom, Google Meet, Vimeo and other services connected reliably.', icon: Link2 },
  { title: 'Application Maintenance', description: 'Bug fixes, upgrades and performance care for existing applications.', icon: Wrench },
]

export const approach = [
  { step: '01', title: 'Understand', text: 'Understand business requirements and technical challenges.' },
  { step: '02', title: 'Architect', text: 'Design scalable architecture and database structures.' },
  { step: '03', title: 'Develop', text: 'Build clean, maintainable, secure applications.' },
  { step: '04', title: 'Optimize', text: 'Test, monitor, and improve performance.' },
]
