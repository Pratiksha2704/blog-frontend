import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Latest Blogs
      </h2>

     <div className="text-center mb-16">
  <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
    Explore Modern Tech Insights
  </h1>

  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Stay updated with the latest tutorials on React, Node.js, MongoDB,
    and Full Stack Development.
  </p>
</div>


     
      <div className="grid md:grid-cols-3 gap-6">
       {blogs.map((blog) => (
  <BlogCard
    key={blog.id}
    id={blog.id}
    title={blog.title}
    description={blog.description}
      image={blog.image}
      content={blog.content}
  />
))}

      </div>
    </div>
  );
}

export default Home;
