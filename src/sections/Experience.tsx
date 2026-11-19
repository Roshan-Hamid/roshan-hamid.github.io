import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Laptop } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { experience } from '../data/experience'

const icons = { work: Briefcase, freelance: Laptop, education: GraduationCap }

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="exp-title" eyebrow="Experience" title="My Development Journey" />
      <ol className="relative ml-4 border-l border-line sm:ml-6">
        {experience.map((e, i) => {
          const Icon = icons[e.kind]
          return (
            <motion.li
              key={e.company + e.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
            >
              <span className="absolute top-0 -left-[19px] grid size-9 place-items-center rounded-full border border-violet/60 bg-ink text-violet shadow-[0_0_20px_-4px_rgb(139_92_246/0.6)]">
                <Icon className="size-4" aria-hidden />
              </span>
              <div className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-violet/40 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{e.role}</h3>
                    <p className="text-cyan">{e.company}</p>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{e.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {e.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5">
                      <span className="text-violet" aria-hidden>▹</span> {r}
                    </li>
                  ))}
                </ul>
                {e.contributions && (
                  <>
                    <h4 className="mt-5 mb-2 font-mono text-xs tracking-widest text-violet uppercase">Key contributions</h4>
                    <ul className="space-y-2 text-sm leading-relaxed text-muted">
                      {e.contributions.map((r) => (
                        <li key={r} className="flex gap-2.5">
                          <span className="text-cyan" aria-hidden>▹</span> {r}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {e.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </section>
  )
}
