import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { approach } from '../data/services'

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="approach-title" eyebrow="Process" title="How I Approach Development" />
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        <div className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-violet/60 via-cyan/60 to-violet/60 md:block" aria-hidden />
        <div className="absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-violet/60 to-cyan/60 md:hidden" aria-hidden />
        {approach.map((a, i) => (
          <motion.li
            key={a.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative flex gap-5 md:block md:text-center"
          >
            <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-violet/60 bg-ink font-mono text-sm font-bold text-cyan md:mx-auto">
              {a.step}
            </span>
            <div className="md:mt-5">
              <h3 className="text-lg font-bold">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
