import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-content">
            <p >WELCOME TO PHOTOHUB</p>
            <h1>Discover Beautiful
              <pre>Moments</pre></h1> 
            <span>Explore thousands of photos
              <pre>from different albums.</pre></span>
            <Link to={'/photos'} className="hero-button">Explore Photos  &gt; </Link>
        </div>
    </div>
  )
}

export default Hero