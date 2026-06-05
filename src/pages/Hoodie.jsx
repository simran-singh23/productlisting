import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hoodie = () => {
  const [hoodies, setHoodies] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const selectedItem = {
      id: item.id,
      
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
category: "Hoodie",
      quantity: 1,
    };

    localStorage.setItem
    ("cartItems", JSON.stringify([...oldItems, selectedItem]));
    navigate("/buying");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")

      .then((res) => res.json())


      .then((data) => setHoodies(data.products))



      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {hoodies.map((item) => (
        
        <div key={item.id} className="border rounded-lg p-4 shadow">

          <img
            src={item.thumbnail}

            alt={item.title}

            className="w-full h-56 object-cover rounded"

          />
          <h2 className="font-semibold mt-3">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="mt-3 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hoodie;
