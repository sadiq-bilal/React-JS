const img = (seed, size = 400) => `https://picsum.photos/seed/${seed}/${size}`;

const artistInfo = [
  ["Luna Vale", "Dream pop"], ["The Static Hours", "Indie rock"],
  ["Kairo", "Electronic"], ["Mira Solano", "Latin pop"],
  ["Dev Anand Jr", "Hip hop"], ["Ashen Coast", "Alternative"],
  ["Nova Reyes", "R&B"], ["Paper Kites Club", "Folk"],
  ["Orion Black", "Synthwave"], ["Sana Iyer", "Indie pop"],
];

const albumTitles = [
  "Midnight Frequencies", "Glass Gardens", "Afterglow", "Paper Cities",
  "Low Tide", "Velvet Hours", "Signal Fires", "Soft Machines",
  "Golden Static", "Northern Lights Cafe",
];

const songTitles = [
  "Neon Rain", "Slow Burn", "Skyline Drive", "Bare Feet", "Last Train Out",
  "Honey Water", "Echo Chamber", "Paper Planes", "Satellite Heart", "Quiet Storm",
  "Blue Hour", "Window Seat", "Cold Coffee", "Runaway Sun", "Tangled Wires",
  "Paradise Lost", "Salt and Smoke", "Rooftop Lights", "Static Bloom", "Drift",
  "Wildfire", "Sleepwalker", "Afterparty", "Moonlit Road", "Daylight Savings",
  "Open Highway", "Glass House", "Midsummer", "Fading Colors", "Homecoming",
];

export const artists = artistInfo.map(([name, genre], i) => ({
  id: `ar${i}`, name, genre, image: img(`artist${i}`, 500),
}));

export const albums = albumTitles.map((title, i) => ({
  id: `al${i}`, title, artistId: artists[i].id, year: 2015 + i, cover: img(`album${i}`),
}));

export const songs = songTitles.map((title, i) => {
  const album = albums[i % 10];
  return {
    id: `s${i}`,
    title,
    artist: artists[i % 10].name,
    artistId: album.artistId,
    album: album.title,
    albumId: album.id,
    cover: album.cover,
    src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(i % 16) + 1}.mp3`,
  };
});

const playlistInfo = [
  ["Late Night Drive", "Neon lights and empty roads."],
  ["Focus Mode", "Steady beats for deep work."],
  ["Morning Coffee", "Easy start to the day."],
  ["Gym Energy", "Heavy hitters for the last set."],
  ["Rainy Day", "Slow songs for grey skies."],
  ["Road Trip", "Windows down, volume up."],
  ["Chill Evenings", "Wind down without thinking."],
  ["Throwback Mix", "Songs you forgot you loved."],
];

export const playlists = playlistInfo.map(([name, description], i) => ({
  id: `pl${i}`,
  name,
  description,
  cover: img(`playlist${i}`),
  songIds: songs.filter((_, n) => (n + i) % 4 === 0).map((s) => s.id),
}));
