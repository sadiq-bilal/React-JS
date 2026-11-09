import { ArrowLeft, Download, FileText, Folder, Hash, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Errormessage from "../Components/Errormessage";
import EmptyState from "../Components/EmptyState";
import { usePhotos } from "../Context/PhotosContext";
import { useFavorites } from "../Context/FavoritesContext";

function PhotoDetails() {
  const { id } = useParams();
  const { photos, loading, error, loadPhotos } = usePhotos();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Errormessage message={error} onRetry={loadPhotos} />;
  }

  const photo = photos.find((item) => item.id === Number(id));

  if (!photo) {
    return (
      <EmptyState
        title="Photo not found"
        text="This photo does not exist or it was deleted."
      >
        <Link to="/photos" className="mt-4 text-sm text-blue-600">
          Back to Photos
        </Link>
      </EmptyState>
    );
  }

  const liked = isFavorite(photo.id);

  // 5 more photos from the same album
  const morePhotos = photos
    .filter((item) => item.albumId === photo.albumId && item.id !== photo.id)
    .slice(0, 5);

  async function handleDownload() {
    try {
      const response = await fetch(photo.image);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `photo-${photo.id}.jpg`;
      link.click();
    } catch {
      // if download is not possible, just open the image in a new tab
      window.open(photo.image, "_blank");
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Link
        to="/photos"
        className="inline-flex items-center gap-1 text-sm text-blue-600"
      >
        <ArrowLeft size={15} /> Back to Photos
      </Link>

      <div className="grid gap-8 mt-5 md:grid-cols-2">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-72 md:h-96 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-2xl font-bold">{photo.title}</h1>

          <div className="flex gap-12 mt-6 text-sm">
            <div className="flex gap-2">
              <Hash size={18} className="text-blue-600" />
              <div>
                <p className="text-gray-500">Photo ID</p>
                <p className="font-medium">{photo.id}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Folder size={18} className="text-blue-600" />
              <div>
                <p className="text-gray-500">Album</p>
                <p className="font-medium">Album {photo.albumId}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6 text-sm">
            <FileText size={18} className="text-blue-600" />
            <div>
              <p className="text-gray-500">Description</p>
              <p className="mt-1">
                This is a beautiful photo from album {photo.albumId}. Save it to
                your favorites to find it again anytime.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => toggleFavorite(photo.id)}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Heart
                size={16}
                className={liked ? "fill-red-500 text-red-500" : "text-red-500"}
              />
              {liked ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              <Download size={16} /> Download
            </button>
          </div>
        </div>
      </div>

      <h2 className="mt-10 mb-3 text-sm font-semibold">More photos from this album</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {morePhotos.map((item) => (
          <Link key={item.id} to={`/photos/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-24 object-cover rounded-lg hover:opacity-80 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhotoDetails;
