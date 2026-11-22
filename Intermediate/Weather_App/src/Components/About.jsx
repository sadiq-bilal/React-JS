const features = [
  ["🌤️", "Live weather", "Current temperature, feels-like, humidity, wind, pressure and visibility."],
  ["📅", "7-day forecast", "Daily highs and lows with rain chances, plus an hourly view for the next 24 hours."],
  ["🍃", "Air quality", "US AQI with a breakdown of PM2.5, PM10, ozone and other pollutants."],
];

export default function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <p className="muted">
        A simple weather app built with React and Vite. Search any city in the world, switch between °C and °F,
        or use your current location.
      </p>
      <div className="tiles tiles-3">
        {features.map(([icon, title, text]) => (
          <div className="tile left" key={title}>
            <span className="tile-icon">{icon}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="muted small">
        Data from <a href="https://open-meteo.com" target="_blank" rel="noreferrer">Open-Meteo</a> (free, no API key).
      </p>
    </section>
  );
}
