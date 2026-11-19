import { Mail } from 'lucide-react'
import { personal } from '../data/personal'
import { GithubIcon, LinkedinIcon } from './ui/Icons'

/** Renders only the links that are filled in inside data/personal.ts. */
export function SocialLinks({ className = '' }: { className?: string }) {
  const items = [
    { label: 'GitHub', href: personal.github, icon: <GithubIcon className="size-5" />, external: true },
    { label: 'LinkedIn', href: personal.linkedin, icon: <LinkedinIcon className="size-5" />, external: true },
    { label: 'Email', href: personal.email ? `mailto:${personal.email}` : '', icon: <Mail className="size-5" />, external: false },
  ].filter((i) => i.href)

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map((i) => (
        <li key={i.label}>
          <a
            href={i.href}
            aria-label={i.label}
            title={i.label}
            {...(i.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="grid size-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-violet/60 hover:bg-card hover:text-fg"
          >
            {i.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
