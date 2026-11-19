import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="services-title" eyebrow="Services" title="What I Can Build" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-colors hover:border-cyan/50"
            >
              <div className="absolute -top-10 -right-10 size-28 rounded-full bg-violet/0 blur-2xl transition-colors duration-500 group-hover:bg-violet/30" aria-hidden />
              <span className="relative mb-5 grid size-11 place-items-center rounded-xl bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="relative font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
