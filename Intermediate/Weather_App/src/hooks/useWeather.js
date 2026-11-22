import { useCallback, useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";

const DEFAULT_PLACE = { name: "Mumbai", region: "Maharashtra", country: "India", lat: 19.076, lon: 72.8777 };

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
const save = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
};

export function useWeather() {
  const [place, setPlace] = useState(() => read("wx-place", DEFAULT_PLACE));
  const [unit, setUnit] = useState(() => read("wx-unit", "C"));
  const [recent, setRecent] = useState(() => read("wx-recent", []));
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ status: "loading", data: null, error: "" });

  useEffect(() => {
    let ignore = false;
    fetchWeather(place)
      .then((data) => !ignore && setState({ status: "ready", data, error: "" }))
      .catch((e) => !ignore && setState({ status: "error", data: null, error: e.message || "Something went wrong." }));
    return () => { ignore = true; };
  }, [place, attempt]);

  const selectPlace = useCallback((p) => {
    setState((s) => ({ ...s, status: "loading" }));
    setPlace(p);
    save("wx-place", p);
    setRecent((prev) => {
      const next = [p, ...prev.filter((r) => r.name !== p.name || r.country !== p.country)].slice(0, 5);
      save("wx-recent", next);
      return next;
    });
  }, []);

  const changeUnit = (u) => { setUnit(u); save("wx-unit", u); };
  const retry = () => { setState((s) => ({ ...s, status: "loading" })); setAttempt((n) => n + 1); };

  return { place, unit, recent, changeUnit, selectPlace, retry, ...state };
}
