import { useEffect, useState } from "react";
import { searchCities } from "../api/weather";

const label = (c) => [c.name, c.region, c.country].filter(Boolean).join(", ");

export default function SearchBar({ onSelect, recent }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) return;
    const t = setTimeout(async () => {
      try {
        const list = await searchCities(q);
        setResults(list);
        setNote(list.length ? "" : "No matching city found");
      } catch {
        setResults([]);
        setNote("Search is unavailable right now");
      }
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  const pick = (place) => {
    onSelect(place);
    setQuery("");
    setResults([]);
    setNote("");
    setOpen(false);
  };

  const locate = () => {
    if (!navigator.geolocation) return setNote("Geolocation is not supported");
    navigator.geolocation.getCurrentPosition(
      (p) => pick({ name: "My Location", country: "", lat: p.coords.latitude, lon: p.coords.longitude }),
      () => setNote("Location permission denied"),
    );
  };

  const typed = query.trim().length >= 2;
  const items = typed ? results : recent;

  return (
    <div className="search">
      <div className="search-box">
        <span aria-hidden>🔍</span>
        <input
          value={query}
          placeholder="Search for a city…"
          aria-label="Search city"
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => e.key === "Enter" && items[0] && pick(items[0])}
        />
        <button className="locate" onClick={locate} title="Use my location">📍 Locate me</button>
      </div>
      {open && (items.length > 0 || (typed && note)) && (
        <ul className="suggestions">
          {!typed && <li className="hint">Recent searches</li>}
          {items.map((c) => (
            <li key={`${c.lat}${c.lon}`}><button onMouseDown={() => pick(c)}>{label(c)}</button></li>
          ))}
          {typed && items.length === 0 && <li className="hint">{note}</li>}
        </ul>
      )}
      {note && !open && <p className="search-note">{note}</p>}
    </div>
  );
}
