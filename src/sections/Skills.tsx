import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { skillCategories } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="My Technology Stack"
        text="The languages, frameworks and tools I use to build and ship software, from backend and database to web and mobile."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((c, i) => {
          const Icon = c.icon
          const violet = c.accent === 'violet'
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-line bg-card p-6 transition-colors hover:border-violet/50"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`grid size-11 place-items-center rounded-xl ${violet ? 'bg-violet/15 text-violet' : 'bg-cyan/10 text-cyan'}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-xs text-muted">{c.description}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 font-mono text-xs text-fg/90 transition-colors group-hover:border-line hover:!border-cyan/60 hover:text-cyan"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
