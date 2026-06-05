import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dummy = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")

      .then((res) => res.json())

      .then((data) => setProducts(data.products))
      
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const buyProduct = (product) => {
    const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const selectedItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      category: product.category,
      quantity: 1,
    };

    localStorage.setItem("cartItems", JSON.stringify([...oldItems, selectedItem]));
    navigate("/buying");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Loading products...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-950">All Dummy Products</h1>
          <p className="text-gray-600 text-lg mt-4">
            Product detail check karo aur Buy par click karke order page open karo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >
              <div className="bg-lime-100 p-5">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-contain"
                />
              </div>

              <div className="p-5">
                <span className="bg-lime-300 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {product.category}
                </span>

                <h2 className="text-xl font-bold mt-4 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-gray-600 text-sm leading-6 mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>
                    Brand: <span className="font-bold">{product.brand || "No Brand"}</span>
                  </p>
                  <p>
                    Rating: <span className="font-bold">{product.rating}</span>
                  </p>
                  <p>
                    Stock: <span className="font-bold">{product.stock}</span>
                  </p>
                  <p>
                    Discount:{" "}
                    <span className="font-bold text-red-500">
                      {product.discountPercentage}% OFF
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <h3 className="text-3xl font-black">${product.price}</h3>
                  <button
                    onClick={() => buyProduct(product)}
                    className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
