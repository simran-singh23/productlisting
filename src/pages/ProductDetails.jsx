import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen bg-lime-300 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lime-300 py-16 px-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-lime-100 p-10 flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-lg object-contain"
            />
          </div>


          <div className="p-10 lg:p-14">

            <span className="bg-lime-300 px-5 py-2 rounded-full text-lime-950 font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-5 mb-8">
              
              <h2 className="text-6xl font-bold text-lime-700">
                ${product.price}
              </h2>

              <span className="text-red-500 font-bold text-xl">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <div className="space-y-4 mb-10 text-lg">

              <p>
                ⭐ Rating:
                <span className="font-bold ml-2">
                  {product.rating}
                </span>
              </p>

              <p>
                📦 Stock:
                <span className="font-bold ml-2">
                  {product.stock}
                </span>
              </p>

              <p>
                🏷️ Brand:
                <span className="font-bold ml-2">
                  {product.brand}
                </span>
              </p>

            </div>

            <div className="flex gap-5">

              <button className="bg-lime-500 hover:bg-lime-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
                Add To Cart
              </button>

              <Link to="/">
                <button className="border-2 border-lime-500 text-lime-700 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-lime-100 transition">
                  Back
                </button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;