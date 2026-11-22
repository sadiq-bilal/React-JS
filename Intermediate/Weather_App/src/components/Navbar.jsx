import { NavLink } from "react-router-dom";

export default function Navbar({ unit, onUnit, theme, onTheme }) {
  return (
    <header className="navbar">
      <div className="brand"><span>🌤️</span> Weather<b>App</b></div>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/forecast">Forecast</NavLink>
        <NavLink to="/air-quality">Air Quality</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="controls">
        <div className="segmented" role="group" aria-label="Temperature unit">
          {["C", "F"].map((u) => (
            <button key={u} className={unit === u ? "on" : ""} onClick={() => onUnit(u)}>°{u}</button>
          ))}
        </div>
        <button className="icon-btn" onClick={onTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
