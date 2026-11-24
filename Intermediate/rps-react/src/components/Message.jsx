const styles = {
  idle: 'bg-panel text-slate-300 border-edge',
  draw: 'bg-slate-600 text-white border-slate-500',
  win: 'bg-emerald-600 text-white border-emerald-400',
  lose: 'bg-rose-600 text-white border-rose-400',
}

export default function Message({ text, status }) {
  return (
    <div className="mx-4 my-10 text-center">
      <p
        aria-live="polite"
        className={`inline-block rounded-xl border px-6 py-3 text-xl font-medium shadow-md shadow-black/30 transition-colors sm:text-2xl ${styles[status]}`}
      >
        {text}
      </p>
    </div>
  )
}
