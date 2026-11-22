import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useWeather } from "./hooks/useWeather";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Forecast from "./components/Forecast";
import AirQuality from "./components/AirQuality";
import About from "./components/About";
import Footer from "./components/Footer";
import { ErrorBox, Loader } from "./components/Status";

const initialTheme = () => {
  try {
    const saved = localStorage.getItem("wx-theme");
    if (saved) return saved;
  } catch { /* ignore */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function App() {
  const { place, unit, recent, changeUnit, selectPlace, retry, status, data, error } = useWeather();
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("wx-theme", next); } catch { /* ignore */ }
  };

  const body = (render) =>
    status === "loading" ? <Loader />
    : status === "error" ? <ErrorBox message={error} onRetry={retry} />
    : render();

  return (
    <div className="app">
      <Navbar unit={unit} onUnit={changeUnit} theme={theme} onTheme={toggleTheme} />
      <main>
        <SearchBar onSelect={selectPlace} recent={recent} />
        <Routes>
          <Route path="/" element={body(() => (
            <>
              <Current place={place} data={data} unit={unit} />
              <Hourly hourly={data.hourly} unit={unit} isDay={data.current.isDay} />
            </>
          ))} />
          <Route path="/forecast" element={body(() => <Forecast daily={data.daily} unit={unit} />)} />
          <Route path="/air-quality" element={body(() => <AirQuality air={data.air} />)} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
