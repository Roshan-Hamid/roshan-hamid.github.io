import logo from '../assets/logo.svg'
import { personal } from '../data/personal'

/** Logo mark + wordmark. The wordmark hides on very small screens. */
export function Logo({ size = 36, wordmark = true }: { size?: number; wordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={logo} alt="" width={size} height={size} />
      {wordmark && (
        <span className="hidden flex-col leading-none min-[400px]:flex">
          <span className="text-sm font-bold tracking-tight">{personal.name}</span>
          <span className="mt-1 font-mono text-[10px] tracking-widest text-cyan uppercase">{personal.title}</span>
        </span>
      )}
    </span>
  )
}
