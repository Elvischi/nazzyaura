import pic from "../images/lady1.jpg";
import { ShoppingBag } from "lucide-react";
import pic2 from "../images/lady2.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyOrders() {
  const [orderItems, setOrderItems] = useState([
    { id: 1, img: pic, name: "Product 1", price: 300, quantity: 1 },
    { id: 2, img: pic2, name: "Product 2", price: 400, quantity: 1 },
  ]);
  const navigate = useNavigate();

  const updateQuantity = (id, i) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + i) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-screen flex-1 overflow-y-auto relative">
      <div className="flex items-center gap-4 mb-6">
        <ShoppingBag size={50} />
        <div>
          <h2 className="text-2xl font-semibold">My Orders</h2>
          <p className="text-gray-400 text-sm">
            Take a look at your recent orders and details
          </p>
        </div>
      </div>
      <div className="border-b border-yellow-800"></div>

      {orderItems.map((items) => (
        <div
          key={items.id}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-0 px-2 sm:px-6 mt-5 pb-4 border-b border-gray-800 sm:border-0"
        >
          <div className="flex items-center gap-4">
            <img
              src={items.img}
              alt={items.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md shrink-0"
            />
            <p className="text-base sm:text-lg font-medium">{items.name}</p>
          </div>

          <div className="flex items-center justify-between sm:justify-normal sm:gap-6 gap-2">
            <p className="text-sm sm:text-base">
              ${(items.price * items.quantity).toFixed(2)}
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => updateQuantity(items.id, -1)}
                className="bg-black text-white font-bold text-center px-3 sm:px-4 py-1 rounded-md"
              >
                -
              </button>
              <span>{items.quantity}</span>
              <button
                onClick={() => updateQuantity(items.id, 1)}
                className="bg-black text-white font-bold text-center px-3 sm:px-4 py-1 rounded-md"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(items.id)}
              className="bg-red-500 text-white font-bold text-center px-4 sm:px-5 py-1 rounded-md"
            >
              🗑
            </button>
          </div>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
        <h3 className="text-lg font-semibold">
          Total: ${cartTotal.toFixed(2)}
        </h3>
        <button
          className="bg-yellow-500 text-black font-bold text-center px-5 py-3 sm:py-4 rounded-md w-full sm:w-auto tracking-wide hover:bg-yellow-600 transition duration-300"
          onClick={() => navigate("/Cartpage")}
        >
          {orderItems.length > 0
            ? <span className="tracking-wider">Payment</span>
            : "Shopping Cart 🛒"}
        </button>
      </div>
    </div>
  );
}

export default MyOrders;
