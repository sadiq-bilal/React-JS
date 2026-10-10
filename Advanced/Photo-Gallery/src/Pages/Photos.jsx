import React from "react";
import { useState, useEffect } from "react";
import { getPhotos } from "../Services/photoApi";
import Hero from "../Components/Hero";
import PhotoGrid from "../Components/PhotoGrid";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  async function fetchPhotos() {
    try {
      const data = await getPhotos();
      setPhotos(data);
    } catch (error) {
      setError("Failed to fetch photos");
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <div className="photos-page">
      <Hero />
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default Photos;
