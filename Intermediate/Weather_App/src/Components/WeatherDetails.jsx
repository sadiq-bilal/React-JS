import React from 'react'

function WeatherDetails({details}) {
    const items = [
      {
        icon:'💧',
        title: 'humidity',
        description : details.humidity,
      },
      {
        icon:'💨',
        title: 'windSpeed',
        description : details.windSpeed,
      },
      {
        icon:'🌡️',
        title: 'Pressure',
        description : details.pressure,
      },
      {
        icon:'👁️',
        title: 'Visibility',
        description : details.visibility,
      },
      {
        icon:'☀️',
        title: 'uvIndex',
        description : details.uvIndex,
      }
    ]
  return (
    <div className='details'>
     { items.map((item) =>{
       return(
        <div className="details-card" key={item.title}>
          <div className="icon">
                {item.icon} 
          </div>
          <div className="title">
            <p>{item.title}</p>
            <h3>{item.description}</h3>
          </div>
        </div>
       )
     })}
    </div>
  )
}

export default WeatherDetails
