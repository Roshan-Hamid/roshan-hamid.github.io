import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Download, MessageSquare } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'
import { Button } from '../components/ui/Button'
import { personal } from '../data/personal'
import avatar from '../assets/avatar.webp'

const tones = {
  neutral: 'bg-muted',
  available: 'bg-emerald-400',
  busy: 'bg-amber-400',
}

const orbit = ['PHP', 'Flutter', 'MySQL', 'React', 'Laravel']

const snippets = [
  { code: ["$this->db->where('active', 1)", "  ->get('courses');"], cls: 'left-[1%] top-[62%] hidden 2xl:block', delay: 0 },
  { code: ['Widget build(ctx) {', '  return MaterialApp();', '}'], cls: 'right-[2%] top-[22%] hidden xl:block', delay: 1.5 },
  { code: ['CREATE INDEX idx_user', 'ON enrollments(user_id);'], cls: 'right-[6%] bottom-[16%] hidden xl:block', delay: 3 },
]

export function Hero() {
  const { hero, availability } = personal
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-20">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="bg-grid absolute inset-0" />
        <motion.div
          className="absolute -top-32 left-[10%] size-[28rem] rounded-full bg-violet/25 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[5%] bottom-0 size-[24rem] rounded-full bg-cyan/15 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        {snippets.map((s, i) => (
          <div
            key={i}
            className={`animate-float glass absolute rounded-xl px-4 py-3 font-mono text-[11px] leading-5 text-muted/80 ${s.cls}`}
            style={{ animationDelay: `${s.delay}s` }}
          >
            {s.code.map((l) => (
              <div key={l} className="whitespace-pre">{l}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          {availability.show && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted"
            >
              <span className={`size-2 rounded-full ${tones[availability.tone]}`} aria-hidden />
              {availability.label}
            </motion.div>
          )}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan sm:text-sm"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.heading[0]} <span className="text-gradient">{hero.heading[1]}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.text}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Focus areas"
          >
            {hero.keywords.map((k) => (
              <li key={k} className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-medium text-chip">
                {k}
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              Explore My Work <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              <MessageSquare className="size-4" aria-hidden /> Let's Talk
            </Button>
            <Button href={personal.resume} download variant="ghost">
              <Download className="size-4" aria-hidden /> Download Resume
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[30rem]"
        >
          {/* soft glow + disc */}
          <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-violet/40 to-cyan/30 blur-3xl" aria-hidden />
          <div className="absolute inset-[9%] overflow-hidden rounded-full border border-line bg-gradient-to-b from-card-2 to-card">
            <img
              src={avatar}
              alt={`Portrait of ${personal.name}`}
              width={560}
              height={560}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>

          {/* dashed orbit with tech chips */}
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-muted/40" aria-hidden>
            {orbit.map((o, i) => (
              <div key={o} className="absolute inset-0" style={{ transform: `rotate(${i * (360 / orbit.length)}deg)` }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div style={{ transform: `rotate(-${i * (360 / orbit.length)}deg)` }}>
                    <div className="animate-spin-rev glass grid size-12 place-items-center rounded-full font-mono text-[9px] font-semibold text-fg sm:size-14 sm:text-[10px]">
                      {o}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* rotating text badge */}
          <a
            href="#projects"
            aria-label="View my projects"
            className="group absolute bottom-[4%] left-0 grid size-24 place-items-center rounded-full bg-violet text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] transition-transform hover:scale-105 sm:size-28"
          >
            <svg viewBox="0 0 120 120" className="animate-spin-badge absolute inset-0" aria-hidden>
              <defs>
                <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text fill="currentColor" fontSize="10.5" fontWeight="700" letterSpacing="3" fontFamily="ui-monospace, monospace">
                <textPath href="#badge-circle">FULL-STACK DEV · KERALA · PHP · FLUTTER ·</textPath>
              </text>
            </svg>
            <ArrowUpRight className="size-6 transition-transform group-hover:rotate-45" aria-hidden />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-muted/50 pt-2">
          <span className="animate-scroll-dot block size-1.5 rounded-full bg-cyan" />
        </span>
      </a>
    </section>
  )
}
