import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: "📊" },
  { to: "/customers", label: "Customers", icon: "👥" },
  { to: "/deals", label: "Deals", icon: "💼" },
  { to: "/tasks", label: "Tasks", icon: "✅" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={"fixed inset-y-0 left-0 z-20 w-60 bg-slate-900 p-4 text-white transition-transform lg:static lg:translate-x-0 " + (open ? "translate-x-0" : "-translate-x-full")}>
      <p className="mb-6 flex items-center gap-2 px-2 text-xl font-semibold">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-base">📇</span>
        ClientBook
      </p>
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              "block rounded-lg px-3 py-2 text-sm " + (isActive ? "bg-white/20 font-medium" : "text-slate-300 hover:bg-white/10")
            }
          >
            <span className="mr-2">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
