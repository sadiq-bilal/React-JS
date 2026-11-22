import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Detail from "./pages/Detail";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen md:pl-56">
      <Sidebar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="px-4 py-6 pb-44 md:px-8 md:pb-32"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/album/:id" element={<Detail kind="album" />} />
          <Route path="/artist/:id" element={<Detail kind="artist" />} />
          <Route path="/playlist/:id" element={<Detail kind="playlist" />} />
          <Route path="*" element={<p className="text-zinc-400">Page not found.</p>} />
        </Routes>
      </motion.main>
      <Player />
    </div>
  );
}
