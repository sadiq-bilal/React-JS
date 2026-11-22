import { NavLink } from "react-router-dom";
import { Home, Library, Search } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/search", label: "Search", icon: Search },
  { to: "/library", label: "Library", icon: Library },
];

export default function Sidebar() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-56 flex-col bg-[#181818] p-5 md:flex">
        <h1 className="mb-8 text-2xl font-bold tracking-tight">
          <span className="text-[#ff0033]">Mel</span>ody
        </h1>
        <nav className="flex flex-col gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 ${isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`
              }
            >
              <Icon size={20} /> {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex h-14 justify-around border-t border-white/10 bg-[#181818] md:hidden">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-6 text-xs ${isActive ? "text-white" : "text-zinc-400"}`
            }
          >
            <Icon size={20} /> {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
