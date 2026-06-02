import React from "react";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: "2014",
    image:
      "https://i.pinimg.com/1200x/46/63/95/46639573fd4b919c9b7239ac00481d8c.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: "2010",
    image:
      "https://i.pinimg.com/1200x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: "2009",
    image:
      "https://i.pinimg.com/1200x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: "2022",
    image:
      "https://i.pinimg.com/736x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg",
  },
];

const Movies = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold">🎬 Movie Hub</h1>
        <p className="text-gray-400 mt-4">
          Discover the latest and greatest movies.
        </p>
      </div>

  
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">
                
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-400">{movie.year}</p>

              <button className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;