import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Search box in the navbar, it opens the photos page with the search text
function SearchBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/photos?search=" + encodeURIComponent(text.trim()));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden md:flex items-center w-56 h-10 px-3 border border-gray-300 rounded-full"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search photos..."
        className="flex-1 min-w-0 text-sm outline-none"
      />
      <button type="submit" className="text-gray-500 hover:text-blue-600">
        <Search size={17} />
      </button>
    </form>
  );
}

export default SearchBar;
