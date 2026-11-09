import AlbumCard from "../Components/AlbumCard";
import Loader from "../Components/Loader";
import Errormessage from "../Components/Errormessage";
import { usePhotos } from "../Context/PhotosContext";

function Albums() {
  const { photos, albumIds, loading, error, loadPhotos } = usePhotos();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Errormessage message={error} onRetry={loadPhotos} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Albums</h1>
      <p className="mt-1 mb-6 text-sm text-gray-500">Browse photos by album</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* first card shows 4 photos together */}
        <AlbumCard to="/photos" title="All Photos" count={photos.length}>
          <div className="grid grid-cols-2 h-full">
            {photos.slice(0, 4).map((photo) => (
              <img
                key={photo.id}
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </AlbumCard>

        {albumIds.map((id) => {
          const albumPhotos = photos.filter((photo) => photo.albumId === id);
          return (
            <AlbumCard
              key={id}
              to={`/photos?album=${id}`}
              title={`Album ${id}`}
              count={albumPhotos.length}
            >
              <img
                src={albumPhotos[0].image}
                alt={`Album ${id} cover`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </AlbumCard>
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
