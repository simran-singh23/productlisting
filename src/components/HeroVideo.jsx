import React from "react";
import { useNavigate } from "react-router-dom";
const HeroVideo = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[500px] w-full overflow-hidden rounded-2xl">
   
      <video
        autoPlay
        loop

        muted
        playsInline

        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/shopping.mp4"
         type="video/mp4" />
      </video>

    
      <div className="absolute inset-0 bg-black/50"></div>

 
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">

          Discover Amazing Products
        </h1>

        <p className="max-w-2xl text-gray-200 text-lg">
          Shop the latest trends, premium quality products, and exclusive
          deals all in one place. Your perfect shopping destination starts
          here.
        </p>

  <button
  onClick={() => navigate("/products")}
  className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  Shop Now
</button>
      </div>
    </section>
  );
};

export default HeroVideo;