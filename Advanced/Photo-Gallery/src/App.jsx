import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EmptyState from "./Components/EmptyState";
import { PhotosProvider } from "./Context/PhotosContext";
import { FavoritesProvider } from "./Context/FavoritesContext";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import PhotoDetails from "./Pages/PhotoDetails";
import PhotoManager from "./Pages/PhotoManager";
import Albums from "./Pages/Albums";
import Favorites from "./Pages/Favorites";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <PhotosProvider>
        <FavoritesProvider>
          <div className="min-h-screen bg-slate-50 text-gray-800">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/photos/manage" element={<PhotoManager />} />
              <Route path="/photos/:id" element={<PhotoDetails />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="*"
                element={
                  <EmptyState title="Page not found" text="This page does not exist.">
                    <Link to="/" className="mt-4 text-sm text-blue-600">
                      Go to Home
                    </Link>
                  </EmptyState>
                }
              />
            </Routes>
          </div>
        </FavoritesProvider>
      </PhotosProvider>
    </BrowserRouter>
  );
}

export default App;
