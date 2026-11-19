import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

/** The initial theme is set by an inline script in index.html (no flash). */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
