import { useState } from "react";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://reactblog-backend-4.onrender.com/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          content: content
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Post created successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage(data.message || "Error creating post");
      }

    } catch (error) {
      setMessage("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10">

      <h2 className="text-xl font-bold mb-4">Create Post</h2>

      <form onSubmit={handleSubmit}>

        {/* Title */}
        <div className="mb-3">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-3">
          <label className="block mb-1">Content</label>
          <textarea
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button onClick={() => navigate("/createPost")}
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>

      </form>

      {message && <p className="mt-3">{message}</p>}

    </div>
  );
}

export default CreatePost;