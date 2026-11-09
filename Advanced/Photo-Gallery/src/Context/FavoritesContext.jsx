import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // favorites is just a list of photo ids, saved in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      // storage not available, favorites will just work until refresh
    }
  }, [favorites]);

  // add if not there, remove if already there
  function toggleFavorite(id) {
    setFavorites((oldFavorites) =>
      oldFavorites.includes(id)
        ? oldFavorites.filter((favId) => favId !== id)
        : [...oldFavorites, id]
    );
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
