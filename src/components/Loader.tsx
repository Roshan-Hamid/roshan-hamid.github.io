import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { personal } from '../data/personal'

/** Short branded splash that hides itself once the page has loaded. */
export function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const hide = () => window.setTimeout(() => setShow(false), 700)
    if (document.readyState === 'complete') {
      const t = hide()
      return () => window.clearTimeout(t)
    }
    let t = 0
    const onLoad = () => (t = hide())
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
      window.clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src={logo}
              alt={personal.name}
              width={72}
              height={72}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <div className="h-0.5 w-40 overflow-hidden rounded bg-line">
              <motion.div
                className="h-full bg-gradient-to-r from-violet to-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
