import React, { useState } from "react";
import { Link } from "react-router-dom";

const Buying = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const placeOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please name, phone aur address fill karo.");
      return;
    }

    setOrderPlaced(true);
    localStorage.removeItem("cartItems");
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Cart Empty Hai</h1>
          <p className="text-gray-600 mb-6">
            Pehle koi product select karo, phir order place kar paoge.
          </p>
          <Link to="/">
            <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold">
              Back To Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-10">
          Buying Page
        </h1>

        {orderPlaced && (
          <div className="bg-lime-300 text-lime-950 p-6 rounded-3xl shadow-lg mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Order Placed Successfully!</h2>
            <p className="font-semibold">Order No: #{orderNumber}</p>
            <p>
              Delivery: {deliveryDate.toLocaleDateString()} between 10:00 AM - 6:00 PM
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-5 flex flex-col sm:flex-row gap-5"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full sm:w-44 h-44 object-contain bg-lime-100 rounded-2xl"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.category}</p>
                  <p className="text-gray-500 mt-2">Quantity: {item.quantity}</p>
                  <p className="text-3xl font-black mt-4">
                    ${item.price * item.quantity}
                  </p>

                  {!orderPlaced && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-4 border-2 border-red-400 text-red-500 px-5 py-2 rounded-2xl font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-7 h-fit">
            <h2 className="text-3xl font-bold mb-6">Order Details</h2>

            <div className="space-y-4 mb-6">
              <input
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-2xl px-4 py-3 outline-none"
                disabled={orderPlaced}
              />
              <input
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-2xl px-4 py-3 outline-none"
                disabled={orderPlaced}
              />
              <textarea
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Delivery Address"
                className="w-full border rounded-2xl px-4 py-3 outline-none h-28 resize-none"
                disabled={orderPlaced}
              />
              <select
                name="payment"
                value={customer.payment}
                onChange={handleChange}
                className="w-full border rounded-2xl px-4 py-3 outline-none"
                disabled={orderPlaced}
              >
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>UPI</option>
              </select>
            </div>

            <div className="border-t pt-5 space-y-3">
              <p className="flex justify-between">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery Time</span>
                <span>5 Days</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery Date</span>
                <span>{deliveryDate.toLocaleDateString()}</span>
              </p>
              <p className="flex justify-between text-2xl font-black">
                <span>Total</span>
                <span>${totalPrice}</span>
              </p>
            </div>

            {!orderPlaced ? (
              <button
                onClick={placeOrder}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold mt-6 hover:bg-gray-800"
              >
                Place Order
              </button>
            ) : (
              <Link to="/">
                <button className="w-full bg-lime-500 text-white py-4 rounded-2xl font-bold mt-6">
                  Continue Shopping
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buying;
