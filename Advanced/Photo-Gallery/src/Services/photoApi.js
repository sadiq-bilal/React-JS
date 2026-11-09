import { getImageUrl } from "../Utils/helpers";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

// all requests send and receive json
const headers = { "Content-Type": "application/json; charset=UTF-8" };

// GET - all photos (400 photos = 8 albums, 50 photos in each album)
export async function getPhotos() {
  const response = await fetch(API_URL + "?_limit=400");

  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }

  const data = await response.json();

  // keep only what we need and add our own image link
  return data.map((photo) => ({
    id: photo.id,
    albumId: photo.albumId,
    title: photo.title,
    image: getImageUrl(photo.id),
  }));
}

// POST - create a new photo
export async function createPhoto(photo) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      title: photo.title,
      albumId: photo.albumId,
      url: photo.image,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create photo");
  }

  return response.json();
}

// PUT - update a photo
export async function editPhoto(id, photo) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      id: id,
      title: photo.title,
      albumId: photo.albumId,
      url: photo.image,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update photo");
  }

  return response.json();
}

// DELETE - delete a photo
export async function removePhoto(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

  if (!response.ok) {
    throw new Error("Failed to delete photo");
  }
}
