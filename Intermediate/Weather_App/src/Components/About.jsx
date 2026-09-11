import React from 'react'

function About() {
  return (
    <section className="about">

      <h1>About Weather App</h1>

      <p>
        Welcome to Weather App! This application provides simple
        and useful weather information for different cities.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <span>🌤️</span>
          <h2>Current Weather</h2>
          <p>
            Check the current temperature, weather condition,
            humidity, wind speed and feels-like temperature.
          </p>
        </div>

        <div className="about-card">
          <span>📅</span>
          <h2>7-Day Forecast</h2>
          <p>
            View the upcoming weather forecast including
            maximum and minimum temperatures.
          </p>
        </div>

        <div className="about-card">
          <span>🍃</span>
          <h2>Air Quality</h2>
          <p>
            Check the air quality index and understand the
            current air quality condition.
          </p>
        </div>

      </div>

      <div className="about-info">
        <h2>Features</h2>

        <ul>
          <li>Search weather by city</li>
          <li>Current weather information</li>
          <li>7-day weather forecast</li>
          <li>Air Quality Index</li>
          <li>Temperature conversion between °C and °F</li>
          <li>Responsive design</li>
        </ul>
      </div>

    </section>

  )
}

export default About;