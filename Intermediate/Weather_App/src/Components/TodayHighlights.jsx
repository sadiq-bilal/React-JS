import React from "react";

function TodayHighlights({ weather, unit }) {
  const convertTemperature = (temp) => {
    if (unit === "F") {
      return Math.round((temp * 9) / 5 + 32);
    }
    return temp;
  };
  
  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div>
        <span>Max Temp </span>
        <span>{convertTemperature(weather.highlights.maxTemp)}°{unit}</span>
      </div>
      <hr />
      <div>
        <span>Min Temp </span>
        <span>{convertTemperature(weather.highlights.minTemp)}°{unit}</span>
      </div>
      <hr />
      <div>
        <span>Sunrise </span>
        <span>{weather.highlights.sunrise}</span>
      </div>
      <hr />
      <div>
        <span>Sunset </span>
        <span>{weather.highlights.sunset}</span>
      </div>
      <hr />
      <div>
        <span>Visibility </span>
        <span>{weather.highlights.visibility} km</span>
      </div>
    </div>
  );
}

export default TodayHighlights;
