import type { ProjectVisual as Kind } from '../data/projects'

/** Abstract UI mockups drawn with markup, so no client screenshots are needed. */
function Bar({ w, c = 'bg-line' }: { w: string; c?: string }) {
  return <div className={`h-2 rounded ${c}`} style={{ width: w }} />
}

function Body({ kind }: { kind: Kind }) {
  switch (kind) {
    case 'lms':
      return (
        <div className="grid grid-cols-[0.8fr_2fr] gap-3">
          <div className="space-y-2 rounded-lg bg-ink/60 p-2.5">
            <Bar w="80%" c="bg-violet/70" /><Bar w="60%" /><Bar w="70%" /><Bar w="50%" />
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-video rounded-md bg-gradient-to-br from-violet/40 to-cyan/20" />
              ))}
            </div>
            <div className="space-y-1.5">
              <Bar w="100%" /><div className="h-2 w-full overflow-hidden rounded bg-line"><div className="h-full w-2/3 bg-cyan/70" /></div>
            </div>
          </div>
        </div>
      )
    case 'exam':
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Bar w="35%" c="bg-violet/60" />
            <span className="rounded bg-cyan/15 px-2 py-0.5 font-mono text-[10px] text-cyan">29:41</span>
          </div>
          <Bar w="90%" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`flex items-center gap-2 rounded-md border p-2 ${i === 1 ? 'border-violet/60 bg-violet/10' : 'border-line'}`}>
              <span className="size-3 rounded-full border border-muted/50" /><Bar w={`${40 + i * 10}%`} />
            </div>
          ))}
        </div>
      )
    case 'crm':
      return (
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 rounded-md bg-ink/60 p-2">
              <Bar w="75%" /><Bar w="55%" />
              <span className={`rounded px-1.5 font-mono text-[9px] ${i % 2 ? 'bg-violet/20 text-violet' : 'bg-cyan/15 text-cyan'}`}>
                {i % 2 ? 'PENDING' : 'PAID'}
              </span>
            </div>
          ))}
          <div className="rounded-md border border-dashed border-violet/50 p-2 font-mono text-[10px] text-muted">pay.link/…</div>
        </div>
      )
    case 'live':
      return (
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-video rounded-md bg-gradient-to-br from-card-2 to-ink">
              <span className="absolute top-1.5 left-1.5 size-1.5 rounded-full bg-red-400" />
              <span className="absolute inset-0 grid place-items-center font-mono text-[10px] text-muted">
                {['Zoom', 'Meet', 'Vimeo', 'REC'][i]}
              </span>
            </div>
          ))}
        </div>
      )
    case 'db':
      return (
        <div className="space-y-2 font-mono text-[10px] leading-4 text-muted">
          <div className="rounded-md bg-ink/60 p-2.5">
            <span className="text-violet">SELECT</span> * <span className="text-violet">FROM</span> orders<br />
            <span className="text-violet">WHERE</span> user_id = ?
          </div>
          <div className="rounded-md bg-ink/60 p-2.5">
            <span className="text-cyan">EXPLAIN</span> → type: <span className="text-cyan">ref</span>
            <br />key: idx_user_id
          </div>
        </div>
      )
    case 'attendance':
      return (
        <div className="flex items-center justify-center gap-5 py-1">
          <svg viewBox="0 0 120 170" className="h-36 w-auto drop-shadow-[0_10px_24px_rgb(139_92_246/0.35)]" role="img" aria-label="Biometric attendance terminal">
            <rect x="8" y="4" width="104" height="162" rx="16" className="fill-card-2 stroke-line" strokeWidth="2" />
            <rect x="18" y="14" width="84" height="52" rx="7" className="fill-ink" />
            <text x="60" y="38" textAnchor="middle" className="fill-cyan" fontFamily="ui-monospace, monospace" fontSize="15" fontWeight="700">09:30</text>
            <text x="60" y="54" textAnchor="middle" className="fill-muted" fontFamily="ui-monospace, monospace" fontSize="7">CHECK-IN OK</text>
            <circle cx="60" cy="108" r="30" className="fill-ink stroke-violet" strokeWidth="2" />
            <g className="stroke-cyan" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M44 112c0-10 7-17 16-17s16 7 16 17" />
              <path d="M49 116c0-7 5-12 11-12s11 5 11 12" />
              <path d="M54 120c0-4 2.5-7 6-7s6 3 6 7" />
              <path d="M60 119v8M48 122c1 6 5 10 12 11M72 122c-1 6-5 10-12 11" />
            </g>
            <g className="fill-line">
              <circle cx="30" cy="152" r="3" /><circle cx="60" cy="154" r="3" /><circle cx="90" cy="152" r="3" />
            </g>
          </svg>
          <ul className="hidden space-y-2 font-mono text-[10px] text-muted sm:block">
            {['ZKTeco', 'ESSL', 'Branch A', 'Branch B'].map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                <span className={`size-1.5 rounded-full ${i < 2 ? 'bg-cyan' : 'bg-violet'}`} /> {t}
              </li>
            ))}
          </ul>
        </div>
      )
    case 'mobile':
      return (
        <div className="flex justify-center gap-3">
          <div className="w-20 space-y-1.5 rounded-xl border border-line bg-ink/60 p-2">
            <div className="h-10 rounded bg-gradient-to-br from-violet/50 to-cyan/30" /><Bar w="80%" /><Bar w="50%" />
            <div className="h-4 rounded bg-violet/60" />
          </div>
          <div className="mt-4 w-20 space-y-1.5 rounded-xl border border-line bg-ink/60 p-2">
            <Bar w="60%" c="bg-cyan/60" /><Bar w="100%" /><Bar w="90%" /><Bar w="70%" />
          </div>
        </div>
      )
  }
}

export function ProjectVisual({ kind, className = '' }: { kind: Kind; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-card-2 to-card p-4 ${className}`}
      aria-hidden
    >
      <div className="mb-3 flex gap-1.5">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-amber-400/70" />
        <span className="size-2 rounded-full bg-emerald-400/70" />
      </div>
      <Body kind={kind} />
    </div>
  )
}
