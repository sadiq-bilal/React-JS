import React from 'react'
import PhotoCard from './PhotoCard'

function PhotoGrid({photos}) {
  return (
    <div className="photo-grid">
      {photos.map((photo) => {
        return (
        <PhotoCard
          key={photo.id}
          photo ={photo}
        />
        )
      })}
    </div>
  )
}

export default PhotoGrid
