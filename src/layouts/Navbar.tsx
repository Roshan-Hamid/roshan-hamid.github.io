import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { Logo } from '../components/Logo'
import { navLinks, sectionIds } from '../data/navigation'
import { personal } from '../data/personal'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? 'border-b border-line bg-ink' : scrolled ? 'border-b border-line bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" aria-label={`${personal.name} – home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors hover:text-fg ${
                  active === l.id ? 'text-fg' : 'text-muted'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-violet to-cyan"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={personal.resume}
            download
            className="hidden min-h-10 items-center gap-2 rounded-xl border border-violet/50 px-4 text-sm font-semibold text-fg transition-colors hover:bg-violet/15 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden /> Download Resume
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-line lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pt-2 pb-6 sm:px-6">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.id ? 'true' : undefined}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-base ${
                      active === l.id ? 'bg-violet/15 text-fg' : 'text-muted'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personal.resume}
                  download
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet font-semibold"
                >
                  <Download className="size-4" aria-hidden /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
