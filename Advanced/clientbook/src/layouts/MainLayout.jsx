import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Sidebar + header around every page after login
export default function MainLayout({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div className="fixed inset-0 z-10 bg-slate-900/50 lg:hidden" onClick={() => setMenuOpen(false)}></div>}

      <main className="flex-1">
        <Header user={user} onMenu={() => setMenuOpen(true)} onLogout={onLogout} />
        <div className="p-4 sm:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
