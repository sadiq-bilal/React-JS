import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Modal from "../Components/Modal";
import PhotoForm from "../Components/PhotoForm";
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import Errormessage from "../Components/Errormessage";
import { usePhotos } from "../Context/PhotosContext";
import { getPageItems, getTotalPages } from "../Utils/helpers";

// Create, edit and delete photos
function PhotoManager() {
  const { photos, albumIds, loading, error, loadPhotos, addPhoto, updatePhoto, deletePhoto } =
    usePhotos();

  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null); // null = adding a new photo
  const [deletingPhoto, setDeletingPhoto] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Errormessage message={error} onRetry={loadPhotos} />;
  }

  // newest photos on top
  const sortedPhotos = [...photos].sort((a, b) => b.id - a.id);
  const totalPages = getTotalPages(sortedPhotos);
  const currentPage = Math.min(page, totalPages || 1);

  function openAddForm() {
    setEditingPhoto(null);
    setMessage("");
    setShowForm(true);
  }

  function openEditForm(photo) {
    setEditingPhoto(photo);
    setMessage("");
    setShowForm(true);
  }

  function openDeleteBox(photo) {
    setMessage("");
    setDeletingPhoto(photo);
  }

  // add or edit (the API is called first, the modal closes only if it works)
  async function handleSave(data) {
    try {
      setSaving(true);
      if (editingPhoto) {
        await updatePhoto(editingPhoto.id, data);
      } else {
        await addPhoto(data);
        setPage(1);
      }
      setShowForm(false);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(photo) {
    try {
      setSaving(true);
      await deletePhoto(photo.id);
      setDeletingPhoto(null);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Photo Manager</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your photos (Create, Edit, Delete)
          </p>
        </div>
        <button
          onClick={openAddForm}
          className="flex items-center gap-1 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          <Plus size={16} /> Add Photo
        </button>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-100 rounded-lg shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Album</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getPageItems(sortedPhotos, currentPage).map((photo) => (
              <tr key={photo.id} className="border-t border-gray-100">
                <td className="px-4 py-3">{photo.id}</td>
                <td className="px-4 py-3">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-14 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 max-w-xs truncate">{photo.title}</td>
                <td className="px-4 py-3">Album {photo.albumId}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => openEditForm(photo)}
                      aria-label="Edit photo"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => openDeleteBox(photo)}
                      aria-label="Delete photo"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />

      {showForm && (
        <Modal
          title={editingPhoto ? "Edit Photo" : "Add New Photo"}
          onClose={() => setShowForm(false)}
        >
          {message && <p className="mb-3 text-sm text-red-500">{message}</p>}
          <PhotoForm
            photo={editingPhoto}
            saving={saving}
            albumIds={albumIds.length > 0 ? albumIds : [1]}
            onSave={handleSave}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}

      {deletingPhoto && (
        <Modal title="Delete Photo" onClose={() => setDeletingPhoto(null)}>
          <p className="text-sm text-gray-600">
            Are you sure you want to delete "{deletingPhoto.title}"?
          </p>
          {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setDeletingPhoto(null)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(deletingPhoto)}
              disabled={saving}
              className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg disabled:opacity-60"
            >
              {saving ? "Deleting..." : "Delete"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PhotoManager;
