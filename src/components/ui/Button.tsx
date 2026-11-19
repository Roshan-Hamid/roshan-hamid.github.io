import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
  download?: boolean
  external?: boolean
  className?: string
}

const styles = {
  primary:
    'bg-violet text-white shadow-[0_8px_30px_-8px_rgb(139_92_246/0.7)] hover:brightness-110',
  secondary: 'glass text-fg hover:border-violet/60 hover:bg-card-2',
  ghost: 'text-muted hover:text-fg border border-line hover:border-muted/50',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled,
  download,
  external,
  className = '',
}: Props) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        className={cls}
        download={download || undefined}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </motion.button>
  )
}
