import { useState } from "react";
import { songs } from "../data/music";
import { usePlayer } from "../context/PlayerContext";
import SongRow from "../components/SongRow";

export default function Library() {
  const { liked, recentSongs } = usePlayer();
  const [sort, setSort] = useState("added");

  let likedSongs = songs.filter((s) => liked.includes(s.id));
  if (sort === "title") likedSongs = [...likedSongs].sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "artist") likedSongs = [...likedSongs].sort((a, b) => a.artist.localeCompare(b.artist));

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Liked songs</h1>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded bg-[#222] px-3 py-2 text-sm">
          <option value="added">Default order</option>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
        </select>
      </div>

      {likedSongs.length === 0 ? (
        <p className="mb-10 text-zinc-400">Tap the heart on any song and it will show up here.</p>
      ) : (
        <div className="mb-10">
          {likedSongs.map((s, i) => <SongRow key={s.id} song={s} list={likedSongs} position={i} />)}
        </div>
      )}

      <h2 className="mb-3 text-xl font-bold">Recently played</h2>
      {recentSongs.length === 0 ? (
        <p className="text-zinc-400">Songs you play will be listed here.</p>
      ) : (
        recentSongs.map((s, i) => <SongRow key={s.id} song={s} list={recentSongs} position={i} />)
      )}
    </>
  );
}
