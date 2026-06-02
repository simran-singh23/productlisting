import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Top = () => {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTopProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://dummyjson.com/products?limit=30");

        if (!res.ok) {
          throw new Error("Products load nahi ho paaye.");
        }

        const data = await res.json();
        const trendingProducts = data.products
          .sort(
            (a, b) =>

              b.rating - a.rating ||
              b.discountPercentage - a.discountPercentage ||
              b.stock - a.stock
          )
          .slice(0, 12);

        setProducts(trendingProducts);
 setSelectedProduct(trendingProducts[0] || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTopProducts();
  }, []);

  const savings = useMemo(() => {
    if (!selectedProduct) return 0;

    return Math.round(
      (selectedProduct.price * selectedProduct.discountPercentage) / 100
    );
  }, [selectedProduct]);

  const handleBuyNow = () => {
    if (!selectedProduct) return;

    alert(`${selectedProduct.title} selected for buying.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-gray-900">Loading top products...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      <div className="max-w-7xl mx-auto">
        <div className="mb-10">

          <span className="bg-lime-300 text-lime-950 px-5 py-2 rounded-full font-semibold">
            Trending now
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mt-6">
            Top Demand Products
          </h1>
          <p className="text-gray-600 text-lg leading-8 mt-5 max-w-2xl">
            High rating, strong discount aur good stock wale products yahan show ho rahe hain.
            Product select karke details check karo aur buy option use karo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => {
              const isSelected = selectedProduct?.id === product.id;

              return (
                <button key={product.id} type="button"
                  onClick={() => setSelectedProduct(product)}
                  className={`text-left bg-white rounded-3xl overflow-hidden shadow-lg 
                    border-2 transition duration-300 hover:-translate-y-1 ${
                    isSelected ? "border-lime-500" : "border-transparent"
                  }`}
                >
                  <div className="bg-lime-100 p-5">
                    <img src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-sm font-semibold text-lime-700 capitalize">
                        {product.category}
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {product.rating} rating
                      </span>
                    </div>

       <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-6 mt-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-end justify-between mt-5">
           <span className="text-3xl font-bold text-gray-950">
                        ${product.price}
                      </span>
             <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        {product.discountPercentage}% off
                  </span>
               </div>
               </div>
                </button>
              );
            })}
          </div>

          {selectedProduct && (
            <div className="bg-white rounded-3xl shadow-xl p-7 sticky top-6">
              <div className="bg-gray-100 rounded-2xl p-6 mb-6">
                <img
                  src={selectedProduct.thumbnail}

                  alt={selectedProduct.title}
                  className="w-full h-64 object-contain"
                />
              </div>


              <span className="bg-lime-300 text-lime-950 px-4 py-2 rounded-full text-sm font-semibold capitalize">
                {selectedProduct.category}
              </span>

              <h2 className="text-3xl font-bold text-gray-950 mt-5">
                {selectedProduct.title}
              </h2>
              <p className="text-gray-600 leading-7 mt-4">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-3 gap-3 my-6">

                <div className="bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="text-sm text-gray-500">Price</p>

                  <p className="text-xl font-bold">${selectedProduct.price}</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="text-sm text-gray-500">Save</p>

                  <p className="text-xl font-bold">${savings}</p>

                </div>
                <div className="bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="text-sm text-gray-500">Stock</p>

                  <p className="text-xl font-bold">{selectedProduct.stock}</p>

                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
                >
                  Buy Now
                </button>
                <Link to={`/products/${selectedProduct.id}`} className="w-full">
                  <button className="w-full bg-lime-500 text-white py-4 rounded-2xl font-semibold hover:bg-lime-600 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
