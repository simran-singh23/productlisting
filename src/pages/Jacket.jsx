import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Jacket = () => {
  const [jackets, setJackets] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const selectedItem = {
      id: item.id,

      title: item.title,

      price: item.price,

      thumbnail: item.thumbnail,


      category: "Jacket",

      quantity: 1,

    };

    localStorage.setItem("cartItems", JSON.stringify([...oldItems, selectedItem]));

    navigate("/buying");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")

      .then((res) => res.json())
      .then((data) => setJackets(data.products))
      
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Jackets Collection</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {jackets.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.title}</h2>

              <p className="text-gray-600 mt-2">${item.price}</p>
              

              <button
                onClick={() => addToCart(item)}
                className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jacket;
