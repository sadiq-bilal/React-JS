import { useState } from "react";
import { albums, artists, songs } from "../data/music";
import Card from "../components/Card";
import Section from "../components/Section";
import SongRow from "../components/SongRow";

export default function Search() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const songHits = q ? songs.filter((s) => (s.title + s.artist + s.album).toLowerCase().includes(q)) : [];
  const albumHits = q ? albums.filter((a) => a.title.toLowerCase().includes(q)) : [];
  const artistHits = q ? artists.filter((a) => a.name.toLowerCase().includes(q)) : [];
  const empty = q && !songHits.length && !albumHits.length && !artistHits.length;

  return (
    <>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search songs, albums or artists"
        className="mb-8 w-full max-w-xl rounded-full bg-[#222] px-5 py-3 outline-none focus:ring-2 focus:ring-[#ff0033]"
      />

      {!q && <p className="text-zinc-400">Type something to start searching.</p>}
      {empty && <p className="text-zinc-400">Nothing found for "{query}". Try a different spelling.</p>}

      {songHits.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-bold">Songs</h2>
          {songHits.map((s, i) => <SongRow key={s.id} song={s} list={songHits} position={i} />)}
        </section>
      )}
      {albumHits.length > 0 && (
        <Section title="Albums" grid>
          {albumHits.map((a) => <Card key={a.id} to={`/album/${a.id}`} image={a.cover} title={a.title} subtitle={a.year} />)}
        </Section>
      )}
      {artistHits.length > 0 && (
        <Section title="Artists" grid>
          {artistHits.map((a) => <Card key={a.id} to={`/artist/${a.id}`} image={a.image} title={a.name} subtitle={a.genre} round />)}
        </Section>
      )}
    </>
  );
}
