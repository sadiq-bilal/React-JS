import { useState } from "react";

// Form used for both "Add New Photo" and "Edit Photo"
function PhotoForm({ photo, albumIds, saving, onSave, onCancel }) {
  const [title, setTitle] = useState(photo ? photo.title : "");
  const [albumId, setAlbumId] = useState(photo ? photo.albumId : albumIds[0]);
  const [image, setImage] = useState(photo ? photo.image : "");

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      title: title.trim(),
      albumId: Number(albumId),
      image: image.trim(),
    });
  }

  const inputClass =
    "w-full mt-1 mb-4 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium">Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter photo title"
            className={inputClass}
          />

          <label className="text-sm font-medium">Album</label>
          <select
            value={albumId}
            onChange={(e) => setAlbumId(e.target.value)}
            className={inputClass}
          >
            {albumIds.map((id) => (
              <option key={id} value={id}>
                Album {id}
              </option>
            ))}
          </select>
        </div>

        <div className="w-32 h-28 mt-1 rounded-lg bg-gray-100 overflow-hidden hidden sm:flex items-center justify-center text-xs text-gray-400">
          {image ? (
            <img src={image} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            "Preview"
          )}
        </div>
      </div>

      <label className="text-sm font-medium">Image URL *</label>
      <input
        type="url"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter image URL"
        className={inputClass}
      />
      <p className="-mt-3 mb-4 text-xs text-gray-400">
        Example: https://picsum.photos/id/10/800/600
      </p>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60"
        >
          {saving ? "Saving..." : photo ? "Save Changes" : "Add Photo"}
        </button>
      </div>
    </form>
  );
}

export default PhotoForm;
