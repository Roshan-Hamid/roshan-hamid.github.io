import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from 'lucide-react'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { SocialLinks } from '../components/SocialLinks'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { personal } from '../data/personal'

/**
 * Sending options, in order of priority:
 * 1. VITE_WEB3FORMS_KEY: free Web3Forms access key (https://web3forms.com). Mail arrives in your inbox, no SMTP needed.
 * 2. VITE_FORM_ENDPOINT: any other JSON form endpoint (e.g. Formspree).
 * 3. Neither set: opens the visitor's email app (mailto). Nothing is sent from the site itself.
 * Bot protection: hidden honeypot field, minimum-fill-time check, 30s cooldown, plus Web3Forms' own filtering.
 */
const W3F_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
const HAS_BACKEND = Boolean(W3F_KEY || ENDPOINT)
const MIN_FILL_MS = 3000
const COOLDOWN_MS = 30000

type Status = 'idle' | 'loading' | 'success' | 'mailto' | 'error'
type Fields = { name: string; email: string; subject: string; message: string }

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

const inputCls =
  'w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-fg placeholder:text-muted/60 transition-colors focus:border-violet focus:outline-none'

export function Contact() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [notice, setNotice] = useState('')
  const openedAt = useRef(Date.now())

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    // Bot traps: hidden honeypot field, and a form that is filled in too fast.
    const honeypot = ((new FormData(e.currentTarget).get('website') as string) ?? '').trim()
    if (honeypot) return
    if (Date.now() - openedAt.current < MIN_FILL_MS) {
      setNotice('Please take a moment to review your message, then submit again.')
      setStatus('error')
      return
    }
    try {
      const last = Number(localStorage.getItem('contact:last') ?? 0)
      if (Date.now() - last < COOLDOWN_MS) {
        setNotice('Message already sent. Please wait a few seconds before sending another.')
        setStatus('error')
        return
      }
    } catch {
      /* storage unavailable: skip cooldown */
    }
    setNotice('')

    if (!HAS_BACKEND) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('loading')
    try {
      const res = W3F_KEY
        ? await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: W3F_KEY,
              subject: `[Portfolio] ${values.subject}`,
              from_name: values.name,
              name: values.name,
              email: values.email,
              message: values.message,
              botcheck: '',
            }),
          })
        : await fetch(ENDPOINT as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(values),
          })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) throw new Error(String(res.status))
      try {
        localStorage.setItem('contact:last', String(Date.now()))
      } catch {
        /* ignore */
      }
      setStatus('success')
      setValues({ name: '', email: '', subject: '', message: '' })
      openedAt.current = Date.now()
    } catch {
      setStatus('error')
    }
  }

  const field = (k: keyof Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`c-${k}`} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        id={`c-${k}`}
        name={k}
        value={values[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `c-${k}-err` : undefined}
        className={inputCls}
        {...props}
      />
      {errors[k] && <p id={`c-${k}-err`} role="alert" className="mt-1.5 text-xs text-red-400">{errors[k]}</p>}
    </div>
  )

  const details = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '' },
  ].filter((d) => d.value)

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Have a Project in Mind?"
        text="Let's discuss how technology can help bring your ideas to life."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <ul className="space-y-4">
            {details.map((d) => (
              <li key={d.label} className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-violet/15 text-violet">
                  <d.icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="block truncate hover:text-cyan">{d.value}</a>
                  ) : (
                    <p>{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {field('name', 'Name', { autoComplete: 'name', placeholder: 'Your name' })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
            </div>
            {field('subject', 'Subject', { placeholder: 'What is this about?' })}
            <div>
              <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                id="c-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={set('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'c-message-err' : undefined}
                placeholder="Tell me about your project…"
                className={inputCls}
              />
              {errors.message && <p id="c-message-err" role="alert" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>
            {/* Honeypot spam trap */}
            <div className="absolute -left-[9999px]" aria-hidden>
              <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
              {status === 'loading' ? (
                <><Loader2 className="size-4 animate-spin" aria-hidden /> Sending…</>
              ) : (
                <><Send className="size-4" aria-hidden /> {HAS_BACKEND ? 'Send Message' : 'Compose Email'}</>
              )}
            </Button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 className="size-4" aria-hidden /> Message sent. Thank you, I'll get back to you soon.</p>
              )}
              {status === 'mailto' && (
                <p className="flex items-center gap-2 text-sm text-cyan"><CheckCircle2 className="size-4" aria-hidden /> Your email app should open with the message ready to send. If it doesn't, write to {personal.email}.</p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400"><TriangleAlert className="size-4 shrink-0" aria-hidden /> {notice || `Something went wrong. Please email ${personal.email} directly.`}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
