function Score({ value, label }) {
  return (
    <div className="min-w-32 rounded-xl border border-edge bg-panel px-8 py-4 text-center shadow-md shadow-black/30">
      <p className="text-5xl font-bold tabular-nums text-white">{value}</p>
      <p className="mt-1 text-sm font-medium uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </div>
  )
}

export default function ScoreBoard({ userScore, compScore }) {
  return (
    <div className="mt-12 flex justify-center gap-6">
      <Score value={userScore} label="You" />
      <Score value={compScore} label="Comp" />
    </div>
  )
}
