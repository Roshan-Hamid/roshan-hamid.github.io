import { motion } from 'framer-motion'
import { Gauge, GraduationCap, Languages, MapPin, Plug, Server } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { personal } from '../data/personal'

const icons = { server: Server, plug: Plug, gauge: Gauge }

export function About() {
  const { about } = personal
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="about-title" eyebrow="About me" title={about.heading} />
      <div className="grid items-start gap-12 lg:grid-cols-[300px_1fr]">
        <Reveal className="w-full lg:sticky lg:top-24">
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="mb-4 font-mono text-xs tracking-widest text-violet uppercase">Quick facts</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden /><span><span className="block font-mono text-xs text-muted">Location</span>{personal.location}</span></li>
              <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden /><span><span className="block font-mono text-xs text-muted">Education</span>BCA, University of Calicut (2020–2023)</span></li>
              <li className="flex items-start gap-3"><Languages className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden /><span><span className="block font-mono text-xs text-muted">Languages</span>{personal.languages.join(" · ")}</span></li>
            </ul>
          </div>
        </Reveal>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.highlights.map((h, i) => {
              const Icon = icons[h.icon as keyof typeof icons]
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-violet/50"
                >
                  <span className="mb-4 grid size-10 place-items-center rounded-xl bg-violet/15 text-violet">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{h.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
