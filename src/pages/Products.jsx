import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);


  const getProducts = async () => {

    const res = await
     fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {  getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-lime-300 py-14 px-6">


      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-lime-950">

          Our Products

        </h1>

        <p className="text-gray-800 text-lg mt-5 max-w-2xl mx-auto leading-8">
          Explore amazing products with modern design, premium quality,

          and affordable prices. Shop your favorite items today.

        </p>
      </div>


      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
          >

            <div className="bg-lime-100 p-6">
              <img src={item.thumbnail}  alt={item.title} className="w-full h-60 object-contain"
              />
            </div>

     
            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-7 text-sm mb-5 line-clamp-3">
                {item.description}
              </p>

 <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-lime-700">
                  ${item.price}
                </h3>
<span className="bg-lime-300 px-3 py-1 rounded-full text-sm font-semibold text-lime-950">
                  {item.category}
                </span>
              </div>

              <Link to={`/products/${item.id}`}>
                <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-2xl text-lg font-semibold transition">
                  View Details
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;