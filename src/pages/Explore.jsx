import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")

      .then((res) => res.json())
      .then((data) => {

        setProducts(data.products);
        setSelectedProduct(data.products[0]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
    
  ];

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.title
    
      .toLowerCase()

      .includes(searchQuery.toLowerCase());
    const matchesCategory =

      selectedCategory === "All" || product.category === selectedCategory;


    return matchesSearch && matchesCategory;
  });

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Loading 100 products...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black text-gray-950">
            Explore Collection
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            100 original API products with real product images, details, and
            buying option.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
          <input type="text" placeholder="Search product..." value={searchQuery}

            onChange={(e) => setSearchQuery(e.target.value)}

            className="w-full md:w-96 px-5 py-3 rounded-2xl border outline-none"
          />

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold capitalize ${
                  selectedCategory === category

                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-10 grid lg:grid-cols-2 gap-8">
            <div className="bg-lime-100 rounded-3xl p-6">
              <img src={selectedProduct.thumbnail} alt={selectedProduct.title}
                className="w-full h-[420px] object-contain rounded-2xl"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="bg-lime-300 px-4 py-2 rounded-full font-semibold w-fit capitalize">

                {selectedProduct.category}
              </span>
              <h2 className="text-4xl font-black mt-5">
                {selectedProduct.title}
              </h2>
              <p className="text-gray-600 text-lg leading-8 mt-4">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-3 gap-4 my-7">

                <div className="bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="text-gray-500 text-sm">Price</p>

                  <p className="text-2xl font-black">${selectedProduct.price}</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 text-center">
                  <p className="text-gray-500 text-sm">Rating</p>

                  <p className="text-2xl font-black">{selectedProduct.rating}</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 text-center">

                  <p className="text-gray-500 text-sm">Stock</p>
                  <p className="text-2xl font-black">{selectedProduct.stock}</p>
                </div>
              </div>

              <p className="text-red-500 font-bold mb-5">
                {selectedProduct.discountPercentage}% OFF
              </p>

              <button onClick={() => addToCart(selectedProduct)}
className="bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >
              <div className="bg-lime-100 p-5">
                <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-contain"
                />
              </div>

              <div className="p-5">
                <span className="bg-lime-300 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {product.category}
                </span>

                <h3 className="text-xl font-bold mt-4 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-6 mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <p className="text-3xl font-black">${product.price}</p>

                  <p className="text-sm text-gray-500">{product.rating} rating</p>
                </div>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => setSelectedProduct(product)} className="flex-1 border-2 border-black py-3 rounded-2xl font-semibold hover:bg-gray-100"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800"
                  >
                    Add to Cart
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

export default Explore;
