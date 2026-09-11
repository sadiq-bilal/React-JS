import React from 'react'

function Forecast({ forecast, unit }) {
  const convertTemperature = (temp) => {
    if (unit === "F") {
      return Math.round((temp * 9) / 5 + 32);
    }
    return temp;
  };

  return (
    <div className='forecast'>
      <h2>7-Day Forecast</h2>
      <hr />
      <div className="parent">
        {forecast.map((fc , index) => {
          return(
          <div className="fc-card" key ={index}>
            <p>{fc.day}</p>
            <img src={fc.icon} alt= {fc.condition}/>
            <p>{convertTemperature(fc.max)}°</p>
             <p>{convertTemperature(fc.min)}°</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast
