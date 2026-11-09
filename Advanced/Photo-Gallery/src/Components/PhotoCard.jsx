import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext";

function PhotoCard({ photo }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const liked = isFavorite(photo.id);

  return (
    <div className="relative bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
      <Link to={`/photos/${photo.id}`}>
        <img
          src={photo.image}
          alt={photo.title}
          loading="lazy"
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <h3 className="text-sm font-medium truncate" title={photo.title}>
            {photo.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">Album {photo.albumId}</p>
        </div>
      </Link>

      <button
        onClick={() => toggleFavorite(photo.id)}
        aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full shadow"
      >
        <Heart
          size={16}
          className={liked ? "fill-red-500 text-red-500" : "text-gray-600"}
        />
      </button>
    </div>
  );
}

export default PhotoCard;
