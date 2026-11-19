import { Code2, Database, Layout, Plug, Smartphone, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillCategory {
  title: string
  description: string
  icon: LucideIcon
  accent: 'violet' | 'cyan'
  skills: string[]
}

/** No proficiency percentages are shown, so nothing here is invented. */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Server-side applications, APIs and business logic.',
    icon: Code2,
    accent: 'violet',
    skills: ['PHP', 'CodeIgniter 4', 'Laravel', 'REST API', 'MVC Architecture', 'Python'],
  },
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces.',
    icon: Layout,
    accent: 'cyan',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'AJAX'],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform and Android apps.',
    icon: Smartphone,
    accent: 'violet',
    skills: ['Flutter', 'Dart', 'Android Studio', 'Java (Android)'],
  },
  {
    title: 'Database',
    description: 'Schema design and query performance.',
    icon: Database,
    accent: 'cyan',
    skills: ['MySQL', 'Database Design', 'Query Optimization', 'Index Optimization'],
  },
  {
    title: 'Integrations',
    description: 'Payments, video, live classes and auth.',
    icon: Plug,
    accent: 'violet',
    skills: ['Razorpay', 'Zoom API', 'Google Meet API', 'Vimeo API', 'OTP Authentication', 'Third-party API Integration'],
  },
  {
    title: 'Tools & Cloud',
    description: 'Everyday tooling and deployment.',
    icon: Wrench,
    accent: 'cyan',
    skills: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'Postman', 'WAMP', 'Apache', 'AWS', 'WordPress'],
  },
]
