export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  )
}
