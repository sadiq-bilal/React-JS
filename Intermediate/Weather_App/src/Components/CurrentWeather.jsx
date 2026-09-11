import React from 'react'


function CurrentWeather({ weather, unit }) {
  const convertTemperature = (temp) => {
    if (unit === "F") {
      return Math.round((temp * 9) / 5 + 32);
    }

    return temp;
  };
  return (
    <div className='current-weather'>
        <div className="location">
             📍 {weather.city} , {weather.country}
          </div>
          <div className="current-info">
              <div className="temperature">
          <h1>{convertTemperature(weather.current.temperature)}<span>°{unit}</span></h1>
              </div>
          </div>
          <h2>{weather.current.condition}</h2>

          <div className="weather-summary">
            <span>Feels like {convertTemperature(weather.current.feelsLike)}°</span>
            <span> | </span>
            <span>Humidity: {weather.current.humidity}%</span>
            <span> | </span>
            <span>Wind: 💨{weather.current.wind} km/h</span>
          </div>
          <img src={weather.current.icon} alt="weather.current.condition" />
    </div>
  )
}

export default CurrentWeather
