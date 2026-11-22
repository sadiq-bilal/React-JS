import { aqiInfo } from "../utils";

export default function AirQuality({ air }) {
  if (!air || air.aqi == null) {
    return <section className="card"><h3>Air quality</h3><p className="muted">Air quality data isn’t available for this location.</p></section>;
  }
  const { label, color, advice } = aqiInfo(air.aqi);
  const pollutants = [
    ["PM2.5", air.pm25], ["PM10", air.pm10], ["Ozone", air.o3],
    ["NO₂", air.no2], ["SO₂", air.so2], ["CO", air.co],
  ];
  return (
    <>
      <section className="card aqi">
        <div className="gauge" style={{ "--c": color, "--p": `${Math.min(air.aqi, 300) / 3}%` }}>
          <div><strong>{Math.round(air.aqi)}</strong><small>US AQI</small></div>
        </div>
        <div>
          <h3 style={{ color }}>{label}</h3>
          <p className="muted">{advice}</p>
        </div>
      </section>
      <section className="tiles tiles-3">
        {pollutants.map(([name, v]) => (
          <div className="tile" key={name}>
            <p>{name}</p>
            <strong>{v == null ? "–" : Math.round(v * 10) / 10}</strong>
            <small>µg/m³</small>
          </div>
        ))}
      </section>
    </>
  );
}
