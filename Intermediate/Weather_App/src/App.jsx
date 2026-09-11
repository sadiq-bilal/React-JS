import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import CurrentWeather from "./Components/CurrentWeather";
import TodayHighlights from "./Components/TodayHighlights";
import Forecast from "./Components/Forecast";
import AirQuality from "./Components/AirQuality";
import About from "./Components/About";

import weatherData from "./data/weather";

function App() {
  const [city, setCity] = useState("Mumbai");
  const [unit, setUnit] = useState("C");
  const [search, setSearch] = useState("");

  const weather = weatherData[city];

  const handleSearch = () => {
    const searchedCity =
      search.trim().charAt(0).toUpperCase() +
      search.trim().slice(1).toLowerCase();

    if (weatherData[searchedCity]) {
      setCity(searchedCity);
      setSearch("");
    } else {
      alert("City not found!");
    }
  };

  return (
    <div>
      <Navbar unit={unit} setUnit={setUnit}/>
      <Searchbar onSearch = {handleSearch} 
      search={search} setSearch={setSearch} />
      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <CurrentWeather weather={weather} unit={unit} />
              <TodayHighlights weather={weather} unit={unit} />
            </>
          }
        />

        <Route
          path="/forecast"
          element={<Forecast forecast={weather.forecast} unit={unit}/>}
        />

        <Route
          path="/airquality"
          element={<AirQuality airQuality={weather.airQuality} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

