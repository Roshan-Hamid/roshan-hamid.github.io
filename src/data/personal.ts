/**
 * Personal details. Edit this file to update the whole site.
 * Anything left as an empty string is hidden automatically by the UI.
 */
export const personal = {
  name: 'Roshan Hamid',
  initials: 'RH',
  title: 'Full-Stack Developer',
  email: 'roshanhamidnki@gmail.com',
  phone: '+91 8078053314',
  location: 'Kozhikode, Kerala, India',
  github: 'https://github.com/Roshan-Hamid',
  linkedin: 'https://www.linkedin.com/in/roshan-roshanhamid-6571ab31b',
  resume: `${import.meta.env.BASE_URL}docs/Roshan-Hamid-Resume.pdf`, // replace the file in public/docs/ with your latest CV
  /** Availability badge. Set `show: false` to hide it. */
  availability: {
    show: true,
    label: 'Based in Kozhikode, Kerala',
    tone: 'neutral' as 'neutral' | 'available' | 'busy',
  },
  languages: ['Malayalam', 'English'],
  hero: {
    eyebrow: "HELLO, I'M A FULL-STACK DEVELOPER",
    heading: ['Building Scalable', 'Digital Experiences.'],
    text: 'I turn complex ideas into powerful web applications through clean architecture, intelligent backend systems, and modern technology.',
    keywords: ['Backend Engineering', 'Full-Stack Development', 'API Integrations', 'Database Optimization'],
  },
  about: {
    heading: 'More Than Just Writing Code.',
    paragraphs: [
      "I'm a Full-Stack Developer passionate about building reliable, scalable, and performance-driven web applications.",
      'My work focuses on backend architecture, API integrations, database optimization, and creating solutions that solve real-world business problems.',
      'From developing complete Learning Management Systems to building online examination platforms and payment workflows, I enjoy working on challenging technical problems and turning them into practical solutions.',
    ],
    highlights: [
      { icon: 'server', title: 'Backend Engineering', text: 'Building robust server-side applications and business logic.' },
      { icon: 'plug', title: 'System Integration', text: 'Connecting applications with third-party services and APIs.' },
      { icon: 'gauge', title: 'Performance Optimization', text: 'Improving database queries, application performance, and scalability.' },
    ],
  },
}
