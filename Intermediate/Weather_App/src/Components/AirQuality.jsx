import React from 'react'

function AirQuality({airQuality}) {
  return (
    <div className='Air-quality'>
      <div className="header">
        <h2>Air Quality Index</h2>
      </div>
      <span>🌿</span>
      <div className="circle">
        <div className="inner">
          <p>{airQuality.index}</p>
        </div>
        <div className="good">
          <p>{airQuality.status}</p>
          </div>
      </div>
      <p>{airQuality.description}</p>
    </div>
  )
}

export default AirQuality
