import React from 'react'
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Cart({ addedToCart, cartItems, setCartItems }) {
  const [cartView, setCartView] = useState(false);

  function updateQuantity(id, i) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + i) }
          : item,
      ),
    );
  }
  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function cartTotal() {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  const navigate = useNavigate();

  return (
    <div>
      <button className="relative text-white hover:text-yellow-400 transition duration-300">
        <GiShoppingCart
          className="text-2xl"
          onClick={() => setCartView(true)}
        />
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </button>
      {/* {cartView && <CartView />} */}
      {cartView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 backdrop-blur-sm px-4"
          onClick={() => setCartView(false)}
        >
          <div
            className="bg-gray-900 border border-yellow-900/30 overflow-hidden flex-col items-center mt-auto px-5 py-4 max-w-2xl w-full h-auto shadow-2xl shadow-yellow-900/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-bold text-white mb-4">
                Shopping Cart <GiShoppingCart className="inline-block ml-2" />
              </h2>
              <button
                onClick={() => setCartView(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 border border-yellow-900/30 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-500 transition duration-300"
              >
                <HiX />
              </button>
            </div>
            <div className="w-full h-0.5 bg-yellow-600 mb-4"></div>
            <div className="w-full flex-col items-center justify-between">
              {cartItems.length === 0 ? (
                <p className="text-white">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between w-full mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <h3 className="text-white font-bold">{item.name}</h3>
                    <p className="text-yellow-500 font-bold">
                      ₦{item.price * item.quantity.toLocaleString()}
                    </p>
                    <button
                      className="bg-gray-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <p className="text-white">Quantity: {item.quantity}</p>
                    <button
                      className="bg-gray-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="w-full h-0.5 bg-yellow-600 my-4"></div>
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg text-white font-semibold">
                Total: ₦{cartTotal().toLocaleString()}
              </h3>
              {cartItems.length === 0 ? (
                <button
                  className="bg-yellow-500 text-black font-bold text-center px-3 py-3 sm:py-3 w-full sm:w-auto tracking-wide hover:bg-yellow-600 transition duration-300"
                  onClick={() => navigate("/Products")}
                >
                  Continue Shopping
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-black font-bold text-center px-3 py-3 sm:py-3 w-full sm:w-auto tracking-wide hover:bg-yellow-600 transition duration-300"
                  onClick={() => navigate("/Cartpage")}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;



// onClick={() => navigate("/cart")}
