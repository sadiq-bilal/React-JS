import { Heart, Pause, Play, Repeat, Repeat1, Shuffle, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";
import Cover from "./Cover";

function format(s) {
  if (!s || Number.isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export default function Player() {
  const p = usePlayer();
  const { current } = p;
  if (!current) return null;

  const liked = p.liked.includes(current.id);
  const active = "text-[#ff0033]";
  const RepeatIcon = p.repeat === "one" ? Repeat1 : Repeat;

  return (
    <div className="fixed inset-x-0 bottom-14 z-20 border-t border-white/10 bg-[#181818] md:bottom-0 md:left-56">
      <input
        type="range" min="0" max={p.time.total || 0} step="0.1" value={p.time.now}
        onChange={(e) => p.seek(Number(e.target.value))}
        aria-label="Seek"
        className="block h-1 w-full cursor-pointer accent-[#ff0033]"
      />
      <div className="flex items-center gap-4 px-4 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:w-1/3 md:flex-none">
          <Cover src={current.cover} className={`size-12 rounded ${p.playing ? "" : "opacity-70"}`} />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{current.title}</p>
            <p className="truncate text-xs text-zinc-400">{current.artist}</p>
          </div>
          <button onClick={() => p.toggleLike(current.id)} className="hidden p-1 sm:block">
            <Heart size={18} className={liked ? "fill-[#ff0033] text-[#ff0033]" : "text-zinc-400"} />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:justify-center">
          <button onClick={() => p.setShuffle(!p.shuffle)} className={`hidden p-2 md:block ${p.shuffle ? active : "text-zinc-400"}`} title="Shuffle">
            <Shuffle size={18} />
          </button>
          <button onClick={p.prev} className="p-2" title="Previous (P)"><SkipBack size={20} /></button>
          <button onClick={p.toggle} className="grid size-10 place-items-center rounded-full bg-white text-black" title="Play / pause (Space)">
            {p.playing ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-0.5" />}
          </button>
          <button onClick={() => p.next()} className="p-2" title="Next (N)"><SkipForward size={20} /></button>
          <button onClick={p.cycleRepeat} className={`hidden p-2 md:block ${p.repeat !== "off" ? active : "text-zinc-400"}`} title="Repeat">
            <RepeatIcon size={18} />
          </button>
          <span className="hidden w-24 text-xs text-zinc-400 lg:block">
            {format(p.time.now)} / {format(p.time.total)}
          </span>
        </div>

        <div className="hidden w-1/3 items-center justify-end gap-2 md:flex">
          <button onClick={() => p.setMuted(!p.muted)} title="Mute">
            {p.muted || p.volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range" min="0" max="1" step="0.01" value={p.muted ? 0 : p.volume}
            onChange={(e) => { p.setMuted(false); p.setVolume(Number(e.target.value)); }}
            aria-label="Volume"
            className="w-24 accent-[#ff0033]"
          />
        </div>
      </div>
    </div>
  );
}
