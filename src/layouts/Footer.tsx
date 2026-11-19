import { ArrowUp } from 'lucide-react'
import { Logo } from '../components/Logo'
import { SocialLinks } from '../components/SocialLinks'
import { navLinks } from '../data/navigation'
import { personal } from '../data/personal'

export function Footer() {
  return (
    <footer className="border-t border-line bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <a href="#home" aria-label={`${personal.name} – back to top`}>
            <Logo size={44} />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {personal.title} building scalable web applications, backend systems, API integrations and mobile apps.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-muted transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <SocialLinks />
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line px-4 text-sm text-muted transition-colors hover:border-violet/60 hover:text-fg"
          >
            <ArrowUp className="size-4" aria-hidden /> Back to top
          </a>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </div>
    </footer>
  )
}
