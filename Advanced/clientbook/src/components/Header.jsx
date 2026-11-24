import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/customers": "Customers",
  "/deals": "Deals",
  "/tasks": "Tasks",
};

export default function Header({ user, onMenu, onLogout }) {
  const { pathname } = useLocation();
  const title = titles[pathname] || (pathname.startsWith("/customers/") ? "Customer details" : "ClientBook");

  return (
    <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-800 sm:px-6">
      <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600 lg:hidden" onClick={onMenu}>
        Menu
      </button>
      <h1 className="flex-1 text-xl font-semibold">{title}</h1>
      <span className="hidden text-sm text-slate-500 dark:text-slate-400 sm:inline">{user}</span>
      <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700" onClick={onLogout}>
        Log out
      </button>
    </header>
  );
}
