import { Link } from "react-router-dom";
import { Heart, ListPlus } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";
import Cover from "./Cover";

export default function SongRow({ song, list, position }) {
  const { play, current, liked, toggleLike, addToQueue } = usePlayer();
  const isCurrent = current?.id === song.id;
  const isLiked = liked.includes(song.id);

  return (
    <div className="flex items-center gap-3 rounded-md p-2 hover:bg-white/5">
      <button onClick={() => play(list, position)} className="flex min-w-0 flex-1 items-center gap-3 text-left">
        <Cover src={song.cover} alt="" className="size-11 rounded" />
        <span className="min-w-0">
          <span className={`block truncate text-sm ${isCurrent ? "text-[#ff0033]" : ""}`}>{song.title}</span>
          <span className="block truncate text-xs text-zinc-400">{song.artist}</span>
        </span>
      </button>
      <Link to={`/album/${song.albumId}`} className="hidden w-48 truncate text-xs text-zinc-400 hover:underline md:block">
        {song.album}
      </Link>
      <button onClick={() => addToQueue(song)} title="Add to queue" className="p-2 text-zinc-400 hover:text-white">
        <ListPlus size={18} />
      </button>
      <button onClick={() => toggleLike(song.id)} title="Like" className="p-2">
        <Heart size={18} className={isLiked ? "fill-[#ff0033] text-[#ff0033]" : "text-zinc-400 hover:text-white"} />
      </button>
    </div>
  );
}
