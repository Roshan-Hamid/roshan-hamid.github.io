import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { lazy, Suspense, useCallback, useState } from 'react'
import { ProjectVisual } from '../components/ProjectVisual'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

const ProjectModal = lazy(() => import('../components/ProjectModal'))

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        id="projects-title"
        eyebrow="Featured projects"
        title="Projects That Solve Real Problems."
        text="Anonymized case studies drawn from the production systems I've worked on."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.55 }}
            whileHover={{ y: -6 }}
            className={`group flex flex-col rounded-3xl border border-line bg-card p-5 transition-colors hover:border-violet/50 ${
              i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:p-7' : ''
            }`}
          >
            <ProjectVisual kind={p.visual} className={`transition-transform duration-500 group-hover:scale-[1.02] ${i === 0 ? 'md:self-center' : ''}`} />
            <div className={`flex flex-1 flex-col ${i === 0 ? 'mt-5 md:mt-0 md:justify-center' : 'mt-5'}`}>
              <p className="font-mono text-xs tracking-widest text-cyan uppercase">
                {p.number} · {p.category}
              </p>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-1 text-sm text-fg/80">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-violet" aria-hidden>▹</span> {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-haspopup="dialog"
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-1.5 rounded-xl border border-line px-4 text-sm font-semibold transition-colors hover:border-violet/60 hover:bg-violet/10"
              >
                View Details <ArrowUpRight className="size-4" aria-hidden />
                <span className="sr-only"> of {p.title}</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <Suspense fallback={null}>
            <ProjectModal key={selected.id} project={selected} onClose={close} />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  )
}
