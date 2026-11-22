import { describe, toUnit, dayLabel } from "../utils";

export default function Forecast({ daily, unit }) {
  const lo = Math.min(...daily.map((d) => d.min));
  const hi = Math.max(...daily.map((d) => d.max));
  const span = hi - lo || 1;

  return (
    <section className="card">
      <h3>7-day forecast</h3>
      <ul className="days">
        {daily.map((d, i) => {
          const w = describe(d.code);
          return (
            <li key={d.date}>
              <span className="day">{dayLabel(d.date, i)}</span>
              <span className="emoji" title={w.label}>{w.icon}</span>
              <span className="cond">{w.label}</span>
              <span className="rain">☔ {d.rain}%</span>
              <span className="range">
                <em>{toUnit(d.min, unit)}°</em>
                <span className="bar">
                  <i style={{ left: `${((d.min - lo) / span) * 100}%`, width: `${((d.max - d.min) / span) * 100}%` }} />
                </span>
                <strong>{toUnit(d.max, unit)}°</strong>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
