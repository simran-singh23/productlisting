import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top Fashion Trends in 2026",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    desc: "Discover the latest fashion trends, modern outfits, and stylish collections that are becoming popular this year.",
    date: "12 May 2026",
  },

  {
    id: 2,
    title: "Best Smart Gadgets for Daily Life",
    image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",

    desc: "Explore smart gadgets and modern technology products that can make your daily routine easier and more productive.",
    date: "18 May 2026",
  },
  {
    id: 3,
    title: "How To Choose Perfect Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",

    desc: "Learn how to select comfortable, stylish, and durable shoes that perfectly match your personality and fashion style.",
    date: "25 May 2026",

  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-lime-300 py-14 px-6">

      <div className="text-center max-w-4xl mx-auto mb-16">

        <h1 className="text-6xl font-bold text-lime-950 leading-tight">
          Our Latest Blogs
        </h1>

        <p className="text-gray-800 text-lg mt-6 leading-8">

          Read modern shopping, fashion, lifestyle, and technology blogs.

          Stay updated with the latest trends and discover useful tips
          for better online shopping experiences.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {blogs.map
        ((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-[30px] overflow-hidden shadow-2xl hover:-translate-y-3 duration-300"
          >

           
            <div className="overflow-hidden">
              <img
                src={blog.image} alt={blog.title}
                className="w-full h-72 object-cover hover:scale-110 duration-500"
              />
            </div>

           
            <div className="p-7">

              <span className="bg-lime-300 text-lime-950 px-4 py-2 rounded-full text-sm font-semibold">
                {blog.date}
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-4 leading-snug">
                {blog.title}
              </h2>

              <p className="text-gray-600 leading-8 text-lg mb-6">
                {blog.desc}
              </p>

              <button className="bg-lime-500 hover:bg-lime-600 text-white px-7 py-3 rounded-2xl text-lg font-semibold transition">
                Read More
              </button>

            </div>
          </div>
        ))}

      </div>


      <div className="max-w-5xl mx-auto text-center mt-24 bg-white rounded-[40px] p-12 shadow-2xl">

        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Stay Connected With Us
        </h2>

        <p className="text-gray-600 text-lg leading-9 mb-8">
          Subscribe to our blog updates and never miss the latest news,
          shopping tips, fashion trends, and exclusive product launches.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <input  type="email" placeholder="Enter your email"
            className="px-6 py-4 rounded-2xl border-2 border-lime-300 
            outline-none w-full md:w-[400px] text-lg"
          />
           <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Subscribe
          </button>

        </div>
      </div>

    </div>
  );
};

export default Blog;