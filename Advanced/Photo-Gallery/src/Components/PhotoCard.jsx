import React from 'react'

function PhotoCard({photo}) {
  return (
    <div className="photo-card">
      <div className="image-container">
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </div>
      <div className="photo-info">
        <h3>{photo.title}</h3>
        <p>Album {photo.albumId}</p>
      </div>
    </div>
  )
}

export default PhotoCard
