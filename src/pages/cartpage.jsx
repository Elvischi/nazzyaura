import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cartpage({ addedToCart, cartItems, setCartItems }) {
  const navigate = useNavigate();
  

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function updateQuantity(id, i) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + i) }
          : item,
      ),
    );
  }

  function removeCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function directToProducts() {
    navigate("/products");
  }

  return (
    <div className="bg-gray-950">
      <div className="w-screen h-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className=" flex items-left gap-96 m-4">
          <h1 className="text-white text-2xl font-semibold">
            Your Cart
            <span className="text-yellow-500 font-bold">
              ({cartItems.length} items)
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full h-0.5 bg-yellow-600"></div>
      <div className="w-screen h-full flex flex-col items-center justify-center">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="max-w-4xl w-full text-white text-2xl flex items-center justify-between m-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md shrink-0"
            />
            <p className="text-white">{item.name}</p>
            <p className="text-white">
              ₦{(item.quantity * item.price).toFixed(2)}
            </p>
            <button
              className="bg-gray-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
              onClick={() => updateQuantity(item.id, -1)}
            >
              -
            </button>
            <p className="text-white">{item.quantity}</p>
            <button
              className="bg-gray-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
              onClick={() => updateQuantity(item.id, 1)}
            >
              +
            </button>
            <button
              className="bg-red-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
              onClick={() => removeCart(item.id)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between m-6">
        <h3 className="text-lg text-white font-semibold">
          Total: ₦{cartTotal.toLocaleString()}
        </h3>
        {cartItems.length > 0 ? (
          <button className="bg-yellow-500 text-black font-bold text-center px-3 py-3 sm:py-3 w-full sm:w-auto tracking-wide hover:bg-yellow-600 transition duration-300">
            Payment
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-black font-bold text-center px-3 py-3 sm:py-3 w-full sm:w-auto tracking-wide hover:bg-yellow-600 transition duration-300"
            onClick={() => directToProducts()}
            >
              Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
}

export default Cartpage
