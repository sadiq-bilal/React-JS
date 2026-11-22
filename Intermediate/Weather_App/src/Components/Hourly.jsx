import { describe, toUnit, formatHour } from "../utils";

export default function Hourly({ hourly, unit, isDay }) {
  return (
    <section className="card">
      <h3>Next 24 hours</h3>
      <div className="hourly">
        {hourly.map((h, i) => {
          const hr = Number(h.time.slice(11, 13));
          return (
            <div className="hour" key={h.time}>
              <span>{i === 0 ? "Now" : formatHour(h.time)}</span>
              <span className="emoji">{describe(h.code, i === 0 ? isDay : hr >= 6 && hr < 18).icon}</span>
              <strong>{toUnit(h.temp, unit)}°</strong>
              <small>{h.rain}%</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}
