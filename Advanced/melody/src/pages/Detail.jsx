import { useParams } from "react-router-dom";
import { Play, Shuffle } from "lucide-react";
import { albums, artists, playlists, songs } from "../data/music";
import { usePlayer } from "../context/PlayerContext";
import Cover from "../components/Cover";
import SongRow from "../components/SongRow";

function resolve(kind, id) {
  if (kind === "album") {
    const a = albums.find((x) => x.id === id);
    if (!a) return null;
    const artist = artists.find((x) => x.id === a.artistId);
    return { title: a.title, sub: `${artist.name}, ${a.year}`, image: a.cover, list: songs.filter((s) => s.albumId === id) };
  }
  if (kind === "artist") {
    const a = artists.find((x) => x.id === id);
    if (!a) return null;
    return { title: a.name, sub: a.genre, image: a.image, round: true, list: songs.filter((s) => s.artistId === id) };
  }
  const p = playlists.find((x) => x.id === id);
  if (!p) return null;
  return { title: p.name, sub: p.description, image: p.cover, list: p.songIds.map((sid) => songs.find((s) => s.id === sid)) };
}

export default function Detail({ kind }) {
  const { id } = useParams();
  const { play, playShuffled } = usePlayer();
  const data = resolve(kind, id);

  if (!data) return <p className="text-zinc-400">We couldn't find that {kind}.</p>;

  return (
    <>
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end">
        <Cover src={data.image} className={`size-48 shrink-0 md:size-56 ${data.round ? "rounded-full" : "rounded-lg"}`} />
        <div>
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="mt-2 text-zinc-400">{data.sub}</p>
          <div className="mt-5 flex gap-3">
            <button onClick={() => play(data.list, 0)} className="flex items-center gap-2 rounded-full bg-[#ff0033] px-6 py-2 font-medium">
              <Play size={18} fill="white" /> Play
            </button>
            <button onClick={() => playShuffled(data.list)} className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 font-medium">
              <Shuffle size={18} /> Shuffle
            </button>
          </div>
        </div>
      </div>

      {data.list.map((s, i) => <SongRow key={s.id} song={s} list={data.list} position={i} />)}
    </>
  );
}
