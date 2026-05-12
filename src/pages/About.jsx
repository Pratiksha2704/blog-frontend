function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        About MyBlog
      </h1>

      <div className="bg-white shadow-xl rounded-3xl p-10">
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-blue-600">MyBlog</span> — 
          a platform where we share knowledge about React, Node.js, MongoDB, 
          and modern web development.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our goal is to simplify complex technical concepts and make them easy 
          to understand for beginners and intermediate developers.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          This blog is built using React, Express, and modern UI tools like 
          Tailwind CSS.
        </p>

      </div>

    </div>
  );
}

export default About;
