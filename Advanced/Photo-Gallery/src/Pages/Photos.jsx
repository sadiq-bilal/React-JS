import { Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Hero from "../Components/Hero";
import PhotoGrid from "../Components/PhotoGrid";
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import Errormessage from "../Components/Errormessage";
import EmptyState from "../Components/EmptyState";
import { usePhotos } from "../Context/PhotosContext";
import { getPageItems, getTotalPages } from "../Utils/helpers";

function Photos() {
  const { photos, albumIds, loading, error, loadPhotos } = usePhotos();

  // search, album, sort and page are all kept in the url
  // example: /photos?search=sunset&album=2&sort=oldest&page=3
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const album = searchParams.get("album") || "all";
  const sort = searchParams.get("sort") || "newest";
  const page = Number(searchParams.get("page")) || 1;

  function changeParam(name, value) {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    // go back to page 1 when search, album or sort changes
    if (name !== "page") {
      params.set("page", 1);
    }
    setSearchParams(params, { replace: true });
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Errormessage message={error} onRetry={loadPhotos} />;
  }

  // search + album filter
  let shownPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  if (album !== "all") {
    shownPhotos = shownPhotos.filter((photo) => photo.albumId === Number(album));
  }

  // sorting (newest = highest id)
  if (sort === "newest") {
    shownPhotos.sort((a, b) => b.id - a.id);
  }
  if (sort === "oldest") {
    shownPhotos.sort((a, b) => a.id - b.id);
  }
  if (sort === "a-z") {
    shownPhotos.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === "z-a") {
    shownPhotos.sort((a, b) => b.title.localeCompare(a.title));
  }

  const totalPages = getTotalPages(shownPhotos);
  const currentPage = Math.min(page, totalPages || 1);
  const pagePhotos = getPageItems(shownPhotos, currentPage);

  const selectClass =
    "px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg outline-none md:w-48";

  return (
    <div>
      <Hero />

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* search and filters */}
        <div className="relative -mt-10 p-4 bg-white rounded-lg shadow flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => changeParam("search", e.target.value)}
              placeholder="Search photos..."
              className="w-full py-2 pl-9 pr-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={album}
            onChange={(e) => changeParam("album", e.target.value)}
            className={selectClass}
          >
            <option value="all">All Albums</option>
            {albumIds.map((id) => (
              <option key={id} value={id}>
                Album {id}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => changeParam("sort", e.target.value)}
            className={selectClass}
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
            <option value="a-z">Sort: Title A-Z</option>
            <option value="z-a">Sort: Title Z-A</option>
          </select>
        </div>

        <div className="flex items-center justify-between mt-6 mb-4">
          <p className="text-sm text-gray-500">{shownPhotos.length} photos found</p>
          <Link
            to="/photos/manage"
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Manage Photos
          </Link>
        </div>

        {pagePhotos.length > 0 ? (
          <>
            <PhotoGrid photos={pagePhotos} />
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onChange={(number) => changeParam("page", number)}
            />
          </>
        ) : (
          <EmptyState
            title="No photos found"
            text="Try a different search word or album."
          />
        )}
      </div>
    </div>
  );
}

export default Photos;
