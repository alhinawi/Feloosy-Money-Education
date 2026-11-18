'use client'

/** Progress bar for a track or the whole site. Value 0..100, English digits. */
export default function ProgressBar({ value, label }: { value: number; label?: string }) {
  const v = Math.max(0, Math.min(100, Math.round(value)))
  return (
    <div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-sand-200 dark:bg-brand-900" role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <div className="h-full rounded-full bg-brand-500 transition-all dark:bg-gold-400" style={{ width: `${v}%` }} />
      </div>
      {label && (
        <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
          {label} <span className="num">{v}%</span>
        </p>
      )}
    </div>
  )
}
