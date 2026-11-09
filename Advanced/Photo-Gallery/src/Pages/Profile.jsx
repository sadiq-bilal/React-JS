import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { usePhotos } from "../Context/PhotosContext";
import { useFavorites } from "../Context/FavoritesContext";

function Profile() {
  const { photos, albumIds } = usePhotos();
  const { favorites } = useFavorites();

  const stats = [
    { label: "Photos", value: photos.length },
    { label: "Albums", value: albumIds.length },
    { label: "Favorites", value: favorites.length },
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 text-center">
        <CircleUser size={72} className="mx-auto text-gray-400" />
        <h1 className="mt-3 text-xl font-bold">Sadiq Bilal</h1>
        <p className="text-sm text-gray-500">PhotoHub member</p>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <Link
            to="/favorites"
            className="py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            View Favorites
          </Link>
          <Link
            to="/photos/manage"
            className="py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Manage Photos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
