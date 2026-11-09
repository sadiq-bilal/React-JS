import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PhotoGrid from "../Components/PhotoGrid";
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import Errormessage from "../Components/Errormessage";
import EmptyState from "../Components/EmptyState";
import { usePhotos } from "../Context/PhotosContext";
import { useFavorites } from "../Context/FavoritesContext";
import { getPageItems, getTotalPages } from "../Utils/helpers";

function Favorites() {
  const { photos, loading, error, loadPhotos } = usePhotos();
  const { favorites } = useFavorites();
  const [page, setPage] = useState(1);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Errormessage message={error} onRetry={loadPhotos} />;
  }

  const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id));
  const totalPages = getTotalPages(favoritePhotos);
  const currentPage = Math.min(page, totalPages || 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        <Heart className="text-red-500" /> My Favorites
      </h1>
      <p className="mt-1 mb-6 text-sm text-gray-500">Your saved photos</p>

      {favoritePhotos.length > 0 ? (
        <>
          <PhotoGrid photos={getPageItems(favoritePhotos, currentPage)} />
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onChange={setPage}
          />
        </>
      ) : (
        <EmptyState
          title="No favorites yet"
          text="Tap the heart on any photo to save it here."
        >
          <Link
            to="/photos"
            className="mt-5 px-5 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Browse Photos
          </Link>
        </EmptyState>
      )}
    </div>
  );
}

export default Favorites;
