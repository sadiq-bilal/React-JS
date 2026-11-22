// WMO weather codes -> label, icon and theme
const CODES = {
  0: ["Clear sky", "☀️", "clear"], 1: ["Mainly clear", "🌤️", "clear"],
  2: ["Partly cloudy", "⛅", "cloud"], 3: ["Overcast", "☁️", "cloud"],
  45: ["Fog", "🌫️", "fog"], 48: ["Rime fog", "🌫️", "fog"],
  51: ["Light drizzle", "🌦️", "rain"], 53: ["Drizzle", "🌦️", "rain"], 55: ["Heavy drizzle", "🌧️", "rain"],
  56: ["Freezing drizzle", "🌧️", "rain"], 57: ["Freezing drizzle", "🌧️", "rain"],
  61: ["Light rain", "🌦️", "rain"], 63: ["Rain", "🌧️", "rain"], 65: ["Heavy rain", "🌧️", "rain"],
  66: ["Freezing rain", "🌧️", "rain"], 67: ["Freezing rain", "🌧️", "rain"],
  71: ["Light snow", "🌨️", "snow"], 73: ["Snow", "🌨️", "snow"], 75: ["Heavy snow", "❄️", "snow"],
  77: ["Snow grains", "🌨️", "snow"],
  80: ["Rain showers", "🌦️", "rain"], 81: ["Rain showers", "🌧️", "rain"], 82: ["Violent showers", "🌧️", "rain"],
  85: ["Snow showers", "🌨️", "snow"], 86: ["Snow showers", "🌨️", "snow"],
  95: ["Thunderstorm", "⛈️", "storm"], 96: ["Thunderstorm, hail", "⛈️", "storm"], 99: ["Thunderstorm, hail", "⛈️", "storm"],
};

export function describe(code, isDay = true) {
  const [label, icon, theme] = CODES[code] || ["Unknown", "🌡️", "cloud"];
  const night = !isDay && code <= 1;
  return { label, icon: night ? "🌙" : icon, theme: night ? "night" : theme };
}

export const toUnit = (c, unit) => Math.round(unit === "F" ? (c * 9) / 5 + 32 : c);

// "2026-11-22T06:12" -> "6:12 AM" (kept as local time of the searched city)
export function formatTime(iso) {
  const [h, m] = iso.slice(11, 16).split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}
export const formatHour = (iso) => formatTime(iso).replace(":00", "");

export function dayLabel(date, i) {
  if (i === 0) return "Today";
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
}

export function uvLabel(uv) {
  if (uv < 3) return "Low";
  if (uv < 6) return "Moderate";
  if (uv < 8) return "High";
  return uv < 11 ? "Very high" : "Extreme";
}

const AQI = [
  [50, "Good", "#2e9e5b", "Air quality is satisfactory and poses little or no risk."],
  [100, "Moderate", "#d9a400", "Acceptable, but sensitive people may notice minor effects."],
  [150, "Unhealthy for sensitive groups", "#e8741f", "Sensitive groups should limit prolonged outdoor activity."],
  [200, "Unhealthy", "#d93f3f", "Everyone may begin to experience health effects."],
  [300, "Very unhealthy", "#8e44ad", "Health alert: avoid outdoor exertion."],
  [Infinity, "Hazardous", "#7a1f2b", "Emergency conditions. Stay indoors."],
];
export const aqiInfo = (v) => {
  const [, label, color, advice] = AQI.find(([max]) => v <= max);
  return { label, color, advice };
};
