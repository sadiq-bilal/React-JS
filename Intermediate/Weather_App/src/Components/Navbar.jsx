import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar({unit,setUnit}) {
  return (
    <nav>
      <div className="icon">
        <span>🌤️</span>
        <h2>Weather App</h2>
      </div>
      <div className="nav-links">
        <NavLink to="/" >Home</NavLink>
        <NavLink to={"/forecast"} >Forecast</NavLink>
        <NavLink to={"/airquality"} >Air Quality</NavLink>
        <NavLink to={"/about"} >About</NavLink>
      
      </div>
      
      <div className="settings">
        <div className="button">
          <button className={unit === "C" ? "selected" : ""}
            onClick={() => setUnit("C")}>°C</button>
          <span>|</span>
        <button className={unit === "F" ? "selected" : ""}
            onClick={() => setUnit("F")}>F</button>
        <button>⚙️</button>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;

// weather-app/
// │

// ├── public/
// │   └── weather-icons/
// │       ├── sunny.png
// │       ├── cloudy.png
// │       ├── rainy.png
// │       └── partly-cloudy.png
// │
// ├── src/
// │   │
// │   ├── assets/
// │   │   └── weather-bg.jpg
// │   │
// │   ├── components/
// │   │   ├── Navbar.jsx
// │   │   ├── SearchBar.jsx
// │   │   ├── CurrentWeather.jsx
// │   │   ├── TodayHighlights.jsx
// │   │   ├── Forecast.jsx
// │   │   ├── AirQuality.jsx
// │   │   ├── WeatherDetails.jsx
// │   │   └── Footer.jsx
// │   │
// │   ├── data/
// │   │   └── weatherData.js
// │   │
// │   ├── App.jsx
// │   ├── App.css
// │   ├── index.css
// │   └── main.jsx
// │
// ├── index.html
// ├── package.json
// ├── package-lock.json
// └── vite.config.js
