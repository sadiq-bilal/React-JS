import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// One card on the Albums page. The cover image(s) are passed as children
function AlbumCard({ to, title, count, children }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 hover:shadow-md transition"
    >
      <div className="h-36 rounded-md overflow-hidden">{children}</div>
      <div className="flex items-center justify-between mt-3 px-1">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{count} photos</p>
        </div>
        <ChevronRight size={18} className="text-blue-600" />
      </div>
    </Link>
  );
}

export default AlbumCard;
