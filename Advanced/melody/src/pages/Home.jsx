import { albums, artists, playlists, songs } from "../data/music";
import { usePlayer } from "../context/PlayerContext";
import Card from "../components/Card";
import Section from "../components/Section";
import SongRow from "../components/SongRow";

export default function Home() {
  const { recentSongs } = usePlayer();
  const quickPicks = songs.slice(0, 8);

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Good to see you</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">Quick picks</h2>
        <div className="grid gap-x-6 md:grid-cols-2">
          {quickPicks.map((s, i) => <SongRow key={s.id} song={s} list={quickPicks} position={i} />)}
        </div>
      </section>

      {recentSongs.length > 0 && (
        <Section title="Recently played">
          {recentSongs.slice(0, 10).map((s) => (
            <Card key={s.id} to={`/album/${s.albumId}`} image={s.cover} title={s.title} subtitle={s.artist} />
          ))}
        </Section>
      )}

      <Section title="Mood playlists">
        {playlists.map((p) => <Card key={p.id} to={`/playlist/${p.id}`} image={p.cover} title={p.name} subtitle={p.description} />)}
      </Section>

      <Section title="Popular albums">
        {albums.map((a) => (
          <Card key={a.id} to={`/album/${a.id}`} image={a.cover} title={a.title}
            subtitle={`${artists.find((x) => x.id === a.artistId).name}, ${a.year}`} />
        ))}
      </Section>

      <Section title="Artists you might like">
        {artists.map((a) => <Card key={a.id} to={`/artist/${a.id}`} image={a.image} title={a.name} subtitle={a.genre} round />)}
      </Section>
    </>
  );
}
