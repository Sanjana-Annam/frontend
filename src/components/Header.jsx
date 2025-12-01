import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("userEmail"));
  }, []);

  useEffect(() => {
    const syncAuth = () => setUser(localStorage.getItem("userEmail"));
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const logout = () => {
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-700 font-semibold border-b-2 border-purple-700 pb-1"
      : "text-gray-700 hover:text-purple-700 transition";

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <NavLink to="/" className="text-3xl font-extrabold text-gray-900 tracking-wide">
          WEEP
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/programs" className={linkStyle}>Programs</NavLink>
          <NavLink to="/register" className={linkStyle}>Register</NavLink> {/* ← ALWAYS visible */}
          <NavLink to="/marketplace" className={linkStyle}>Marketplace</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>

          {/* Visible only after login */}
          {user && (
            <>
              <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
              <NavLink to="/add-product" className={linkStyle}>Add Product</NavLink>
              <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
            </>
          )}
        </nav>

        {/* Right side Login / Logout */}
        <div className="hidden md:flex gap-4 items-center">
          {!user ? (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow"
            >
              Login
            </NavLink>
          ) : (
            <>
              <span className="text-purple-700 font-semibold">{user}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-3xl text-purple-700" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 shadow-lg border-t">
          <nav className="flex flex-col text-lg p-6 space-y-5">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkStyle}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/programs" className={linkStyle}>Programs</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/register" className={linkStyle}>Register</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/marketplace" className={linkStyle}>Marketplace</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkStyle}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkStyle}>Contact</NavLink>

            {/* After login */}
            {user && (
              <>
                <NavLink onClick={() => setOpen(false)} to="/dashboard" className={linkStyle}>Dashboard</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/add-product" className={linkStyle}>Add Product</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/profile" className={linkStyle}>Profile</NavLink>
              </>
            )}

            {/* Login / Logout */}
            {!user ? (
              <NavLink onClick={() => setOpen(false)} to="/login" className={linkStyle}>Login</NavLink>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-red-600 font-semibold"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
