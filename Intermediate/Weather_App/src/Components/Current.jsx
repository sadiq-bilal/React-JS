import { describe, toUnit, formatTime, uvLabel } from "../utils";

export default function Current({ place, data, unit }) {
  const { current: c, daily } = data;
  const today = daily[0];
  const w = describe(c.code, c.isDay);
  const where = [place.name, place.region, place.country].filter(Boolean).join(", ");

  const tiles = [
    ["💧", "Humidity", `${c.humidity}%`],
    ["💨", "Wind", `${Math.round(c.wind)} km/h`],
    ["🧭", "Pressure", `${Math.round(c.pressure)} hPa`],
    ["👁️", "Visibility", `${c.visibility.toFixed(1)} km`],
    ["🕶️", "UV Index", `${Math.round(today.uv)} · ${uvLabel(today.uv)}`],
    ["☔", "Rain chance", `${today.rain}%`],
    ["🌅", "Sunrise", formatTime(today.sunrise)],
    ["🌇", "Sunset", formatTime(today.sunset)],
  ];

  return (
    <>
      <section className={`hero theme-${w.theme}`}>
        <div>
          <p className="where">📍 {where}</p>
          <h1 className="temp">{toUnit(c.temp, unit)}<sup>°{unit}</sup></h1>
          <h2>{w.label}</h2>
          <p className="meta">
            Feels like {toUnit(c.feels, unit)}° · H {toUnit(today.max, unit)}° · L {toUnit(today.min, unit)}°
          </p>
        </div>
        <div className="hero-icon" aria-hidden>{w.icon}</div>
      </section>

      <section className="tiles">
        {tiles.map(([icon, title, value]) => (
          <div className="tile" key={title}>
            <span className="tile-icon">{icon}</span>
            <p>{title}</p>
            <strong>{value}</strong>
          </div>
        ))}
      </section>
    </>
  );
}
