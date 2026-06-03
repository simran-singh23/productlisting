import React from "react";
import { ShoppingBag, Star } from "lucide-react";

const movingProducts = [
  {
    id: 1,
    name: "jbl Headphones",
    price: "$89",
    image:
      "https://i.pinimg.com/736x/bd/fa/de/bdfade573fbbc5e1d3b18202dd5007a1.jpg",
  },
  {
    id: 2,
    name: "jeans",
    price: "$120",
    image:
      "https://i.pinimg.com/736x/9e/37/d7/9e37d76bd9fee4c5e1f0ddc99e481905.jpg",
  },
  {
    id: 3,
    name: "shirts",
    price: "$199",
    image:
      "https://i.pinimg.com/1200x/a7/e2/4f/a7e24f75a333015c0f3ad850536ad684.jpg",
  },
];

const ProductMove = () => {
  return (
    <section className="bg-gray-100 px-6 py-16">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lime-600 font-bold">SALE! SALE! SALE!</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            50% OFF 
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {movingProducts.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300 ${
                index === 1 ? "animate-pulse" : "animate-bounce"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
              <Star size={17} fill="black" />
                  <Star size={17} fill="black" />
             <Star size={17} fill="black" />
           <Star size={17} fill="black" />
                  <Star size={17} fill="black" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-gray-500 mt-1">{item.price}</p>
                  </div>

                  <button className="bg-black text-white p-4 rounded-full hover:bg-lime-500 transition">
                    <ShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMove;
