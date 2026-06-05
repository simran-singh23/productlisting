import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fallbackProducts = [
  {
    id: 1,
    title: "Classic Hoodie",
    description: "Soft premium hoodie for daily wear.",
    price: 89,
    discountPercentage: 12,
    rating: 4.8,
    stock: 30,
    category: "fashion",
    thumbnail:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Running Sneakers",
    description: "Comfortable shoes with a modern street style.",
    price: 120,
    discountPercentage: 18,
    rating: 4.7,
    stock: 18,
    category: "shoes",
    thumbnail:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Watch",
    description: "Clean design watch for work, gym, and travel.",
    price: 199,
    discountPercentage: 10,
    rating: 4.6,
    stock: 24,
    category: "accessories",
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Jacket",
    description: "Stylish jacket with a comfortable fit.",
    price: 140,
    discountPercentage: 15,
    rating: 4.9,
    stock: 12,
    category: "fashion",
    thumbnail:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=900&auto=format&fit=crop",
  },
];

const Viewall = () => {
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);
  const [apiMessage, setApiMessage] = useState("");
  const navigate = useNavigate();

  const addToCart = (product) => {
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=30");

        if (!response.ok) {
          throw new Error("Products load nahi ho paaye.");
        }

        const data = await response.json();
        setProducts(data.products || fallbackProducts);
        setApiMessage("");
      } catch (error) {
        setProducts(fallbackProducts);
        setApiMessage("Live API");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-lime-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-950 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fashion, accessories aur daily use products ek simple collection mein.
          </p>

          {apiMessage && (
            <p className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mt-5 text-sm font-semibold">
              {apiMessage}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >
              <div className="relative h-64 bg-lime-100 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-5 hover:scale-110 duration-500"
                />

                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {Math.round(product.discountPercentage)}% OFF
                </span>
              </div>

              <div className="p-5">
                <span className="bg-lime-300 text-lime-950 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {product.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-gray-950">
                    ${product.price}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {product.rating} rating
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-black text-white px-4 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="border-2 border-lime-400 px-4 py-3 rounded-2xl font-semibold hover:bg-lime-300 transition"
                  >
                    Buy
                  </button>
                </div>

                <p className="text-green-600 font-semibold text-sm mt-4">
                  In Stock: {product.stock}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewall;
