import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shoe = () => {
  const [shoes, setShoes] = useState([]);
  const navigate = useNavigate();

  const addToCart = (shoe) => {
    const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const selectedItem = {
      id: shoe.id,
      title: shoe.title,
      price: shoe.price,
      thumbnail: shoe.thumbnail,
      category: "Shoes",
      quantity: 1,
    };

    localStorage.setItem("cartItems", JSON.stringify([...oldItems, selectedItem]));
    navigate("/buying");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="border rounded-lg p-4 shadow">
          <img
            src={shoe.thumbnail}
            alt={shoe.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="font-bold mt-2">{shoe.title}</h2>
          <p>${shoe.price}</p>
          <button
            onClick={() => addToCart(shoe)}
            className="mt-3 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shoe;
