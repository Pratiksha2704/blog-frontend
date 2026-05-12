import { Link } from "react-router-dom";

function BlogCard({ id, title, description, image }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 overflow-hidden">

      <img
        src={image}   // ✅ FIXED
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          Technology
        </span>

        <h2 className="text-xl font-bold mt-4 mb-3 text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <Link
          to={`/blog/${id}`}
          className="font-semibold text-blue-600 hover:text-purple-600 transition"
        >
          Read Full Article →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;