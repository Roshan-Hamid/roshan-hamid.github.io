import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { ProjectVisual } from './ProjectVisual'
import { Tag } from './ui/Tag'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !panelRef.current) return
      const f = panelRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previous?.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line bg-card p-5 sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-cyan uppercase">
              {project.number} · {project.category}
            </p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-bold sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-line text-muted hover:text-fg"
          >
            <X className="size-5" />
          </button>
        </div>

        <ProjectVisual kind={project.visual} className="mt-6" />
        <p className="mt-6 leading-relaxed text-muted">{project.overview}</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 font-mono text-xs tracking-widest text-violet uppercase">Key features</h4>
            <ul className="space-y-2 text-sm">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-xs tracking-widest text-violet uppercase">My contributions</h4>
            <ul className="space-y-2 text-sm">
              {project.contributions.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-violet" aria-hidden /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h4 className="mt-8 mb-3 font-mono text-xs tracking-widest text-violet uppercase">Technology</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">
          Anonymized case study. Client names and confidential details are intentionally omitted.
        </p>
      </motion.div>
    </motion.div>
  )
}
