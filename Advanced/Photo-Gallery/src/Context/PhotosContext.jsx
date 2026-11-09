import { createContext, useContext, useEffect, useState } from "react";
import { getPhotos, createPhoto, editPhoto, removePhoto } from "../Services/photoApi";

const PhotosContext = createContext();

export function PhotosProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // get the photos from the API
  function fetchPhotos() {
    getPhotos()
      .then((data) => {
        setPhotos(data);
        setError("");
      })
      .catch(() => {
        setError("Failed to load photos");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // used by the Retry button
  function loadPhotos() {
    setLoading(true);
    fetchPhotos();
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  // all different album numbers, like [1, 2, 3 ...]
  const albumIds = [...new Set(photos.map((photo) => photo.albumId))].sort(
    (a, b) => a - b
  );

  // Add a new photo: first send it to the API, then show it in the app.
  // (this fake API always replies with id 5001, so we make our own next id)
  async function addPhoto(newPhoto) {
    await createPhoto(newPhoto);
    setPhotos((oldPhotos) => {
      const lastId = Math.max(0, ...oldPhotos.map((photo) => photo.id));
      return [{ ...newPhoto, id: lastId + 1 }, ...oldPhotos];
    });
  }

  // Edit a photo
  async function updatePhoto(id, changes) {
    await editPhoto(id, changes);
    setPhotos((oldPhotos) =>
      oldPhotos.map((photo) => (photo.id === id ? { ...photo, ...changes } : photo))
    );
  }

  // Delete a photo
  async function deletePhoto(id) {
    await removePhoto(id);
    setPhotos((oldPhotos) => oldPhotos.filter((photo) => photo.id !== id));
  }

  return (
    <PhotosContext.Provider
      value={{
        photos,
        albumIds,
        loading,
        error,
        loadPhotos,
        addPhoto,
        updatePhoto,
        deletePhoto,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

export function usePhotos() {
  return useContext(PhotosContext);
}
