
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavSearch = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Close search when the user moves to another page
  useEffect(() => {
    setIsOpen(false);
    setValue("");
  }, [location.pathname]);

  // Open search
  const openSearch = () => {
    setIsOpen(true);
  };

  // Close search
  const closeSearch = () => {
    setIsOpen(false);
    setValue("");
  };

  // Search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) return;

    navigate(`/inventory?search=${encodeURIComponent(value.trim())}`);

    setIsOpen(false);
    setValue("");
  };

  return (
    <div className="flex items-center">
      {!isOpen ? (
        // Normal search icon
        <button
          type="button"
          onClick={openSearch}
          aria-label="Open search"
          className="flex items-center justify-center"
        >
          <Search className="w-6 h-6 text-white cursor-pointer hover:scale-105 transition-transform" />
        </button>
      ) : (
        // Open search
        <div className="flex items-center gap-2">
          <form
            onSubmit={handleSearch}
            className="flex items-center w-[280px] h-10 bg-white rounded-full shadow-md overflow-hidden"
          >
            {/* Input area */}
            <div className="flex-1 flex items-center px-4">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search cars..."
                autoFocus
                className="w-full outline-none bg-transparent text-sm text-[#0b1f33] placeholder:text-gray-400"
              />
            </div>

            {/* Search button */}
            <button
              type="submit"
              aria-label="Search"
              className="h-full w-11 flex items-center justify-center bg-[#f1f3f5] hover:bg-[#e5e7eb] transition-colors"
            >
              <Search className="w-5 h-5 text-[#0b1f33]" />
            </button>
          </form>

          {/* Close button */}
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavSearch;
