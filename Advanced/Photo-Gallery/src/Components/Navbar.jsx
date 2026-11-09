import { Camera, CircleUser } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const links = [
  { to: "/", label: "Home" },
  { to: "/photos", label: "Photos" },
  { to: "/albums", label: "Albums" },
  { to: "/favorites", label: "Favorites" },
];

// blue underline for the page we are on
function linkClass({ isActive }) {
  return isActive
    ? "py-5 text-sm font-medium text-blue-600 border-b-2 border-blue-600"
    : "py-5 text-sm text-gray-500 border-b-2 border-transparent hover:text-blue-600";
}

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-blue-100 text-blue-600 p-1.5 rounded-lg">
              <Camera size={20} />
            </span>
            PhotoHub
          </Link>

          <nav className="flex gap-4 md:gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <Link to="/profile" className="text-gray-500 hover:text-blue-600">
            <CircleUser size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
