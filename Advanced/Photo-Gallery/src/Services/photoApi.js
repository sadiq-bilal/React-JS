const API_URL = "https://jsonplaceholder.typicode.com/photos";

 export async function getPhotos() {

    const response = await fetch(API_URL);

    if(!response.ok){
      throw new Error("Failed to fetch photos");
    }

    const data = await response.json();

   return data;
    
}
