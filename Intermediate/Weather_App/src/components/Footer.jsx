export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Weather App · Data by{" "}
      <a href="https://open-meteo.com" target="_blank" rel="noreferrer">Open-Meteo</a>
    </footer>
  );
}
