import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:5000/api/blogs/${id}`)
    .then(res => res.json())
    .then(data => {
      setBlog(data);
    });
}, [id]);


  if (!blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

return (

  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
     
      <img
        src={blog.image}
        alt={blog.title}
        style={{
    width: "100%",
    height: "250px",
    objectFit: "contain",
    backgroundColor: "#f5f5f5"
  }}
      />

     

      <div className="p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          {blog.description}
        </p>
        <div>
  <h1>{blog.conntent}</h1>

  {blog.content &&
    blog.content.split("\n").map((line, i) => (
      <p key={i}>{line}</p>
    ))}
</div>
      </div>

    </div>
  </div>
);
}

export default BlogDetails;
