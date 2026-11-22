// Open-Meteo: free, no API key required. https://open-meteo.com
const GEO = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST = "https://api.open-meteo.com/v1/forecast";
const AIR = "https://air-quality-api.open-meteo.com/v1/air-quality";

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather service is unavailable. Please try again.");
  return res.json();
}

export async function searchCities(query) {
  const data = await getJSON(
    `${GEO}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`,
  );
  return (data.results || []).map((c) => ({
    id: c.id,
    name: c.name,
    region: c.admin1,
    country: c.country,
    lat: c.latitude,
    lon: c.longitude,
  }));
}

export async function fetchWeather({ lat, lon }) {
  const forecastUrl =
    `${FORECAST}?latitude=${lat}&longitude=${lon}&timezone=auto&forecast_days=7` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,pressure_msl,wind_speed_10m` +
    `&hourly=temperature_2m,weather_code,precipitation_probability,visibility` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max`;
  const airUrl =
    `${AIR}?latitude=${lat}&longitude=${lon}&timezone=auto` +
    `&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`;

  // Air quality is optional: the app still works if it fails.
  const [w, a] = await Promise.all([getJSON(forecastUrl), getJSON(airUrl).catch(() => null)]);

  const c = w.current;
  const h = w.hourly;
  const d = w.daily;
  const start = Math.max(0, h.time.indexOf(c.time.slice(0, 13) + ":00"));

  return {
    current: {
      temp: c.temperature_2m,
      feels: c.apparent_temperature,
      humidity: c.relative_humidity_2m,
      wind: c.wind_speed_10m,
      pressure: c.pressure_msl,
      code: c.weather_code,
      isDay: c.is_day === 1,
      visibility: h.visibility[start] / 1000,
    },
    hourly: h.time.slice(start, start + 24).map((time, i) => ({
      time,
      temp: h.temperature_2m[start + i],
      code: h.weather_code[start + i],
      rain: h.precipitation_probability[start + i],
    })),
    daily: d.time.map((date, i) => ({
      date,
      code: d.weather_code[i],
      max: d.temperature_2m_max[i],
      min: d.temperature_2m_min[i],
      rain: d.precipitation_probability_max[i],
      sunrise: d.sunrise[i],
      sunset: d.sunset[i],
      uv: d.uv_index_max[i],
    })),
    air: a?.current
      ? {
          aqi: a.current.us_aqi,
          pm25: a.current.pm2_5,
          pm10: a.current.pm10,
          no2: a.current.nitrogen_dioxide,
          so2: a.current.sulphur_dioxide,
          o3: a.current.ozone,
          co: a.current.carbon_monoxide,
        }
      : null,
  };
}
