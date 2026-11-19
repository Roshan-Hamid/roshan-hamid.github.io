import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { platforms, platformsIntro } from '../data/platforms'

export function Platforms() {
  return (
    <section id="platforms" aria-labelledby="platforms-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading id="platforms-title" eyebrow="Platforms" title="LMS Platforms I've Worked On" />
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-card p-6 sm:p-8 lg:grid-cols-[auto_1fr]">
        <div className="text-center lg:pr-8 lg:text-left">
          <p className="text-gradient text-6xl font-extrabold tracking-tight">{platformsIntro.stat}</p>
          <p className="mt-1 font-mono text-xs tracking-widest text-cyan uppercase">{platformsIntro.statLabel}</p>
        </div>
        <div>
          <p className={`text-muted ${platforms.length ? 'mb-5' : ''}`}>{platformsIntro.text}</p>
          {platforms.length > 0 && (
          <ul className="flex flex-wrap items-center gap-4">
            {platforms.map((p, i) => (
              <motion.li
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="grid h-20 min-w-36 place-items-center rounded-2xl border border-line bg-white px-5 shadow-sm"
              >
                {p.logo ? (
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="h-14 w-auto object-contain" />
                ) : (
                  <span className="text-lg font-extrabold tracking-tight text-slate-800">{p.name}</span>
                )}
              </motion.li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </section>
  )
}
