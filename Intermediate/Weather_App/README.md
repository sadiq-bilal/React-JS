# Weather App

A clean weather app built with **React + Vite + React Router**, powered by the free
[Open-Meteo](https://open-meteo.com) APIs (no API key needed).

## Features
- Search any city worldwide (live suggestions) or use your current location
- Current conditions: temperature, feels-like, humidity, wind, pressure, visibility, UV, sunrise/sunset
- Next-24-hours strip and 7-day forecast
- Air quality (US AQI + pollutants)
- °C / °F toggle, light / dark theme, recent searches (saved in localStorage)
- Loading and error states with retry

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
Requires Node.js 20.19+ (or 22.12+).

## Structure
```
src/
  api/weather.js       Open-Meteo calls (geocoding, forecast, air quality)
  hooks/useWeather.js  state: place, unit, recent searches, loading/error
  components/          Navbar, SearchBar, Current, Hourly, Forecast, AirQuality, About, Footer, Status
  utils.js             weather codes, formatting, AQI categories
```
