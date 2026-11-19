import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  title: string
  text?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, text, id }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
        <span className="text-violet">//</span> {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </Reveal>
  )
}
