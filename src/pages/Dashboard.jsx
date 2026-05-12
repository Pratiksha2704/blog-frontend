import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 Protect Route
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/blogs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🌀 Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading blogs...</h2>
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard 🚀</h1>

         <Link to="/createPost">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Post
        </button>
      </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Total Blogs</h2>
        <p className="text-3xl font-bold text-blue-600">
          {blogs.length}
        </p>
      </div>

      {/* Blog List */}
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {blog.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;