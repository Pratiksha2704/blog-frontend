import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My<span className="text-blue-600">Blog</span>
        </Link>

        <div className="space-x-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
          Login
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
