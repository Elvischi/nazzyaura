import { Routes, Route } from "react-router-dom";
import React, { useState } from "react"; 
import "leaflet/dist/leaflet.css";
import "./index.css";
import Announcement from "./pages/announcement.jsx";
import Navbar from "./pages/Navbar";
import Home from "./pages/home.jsx";
import Welcome from "./buyer/welcome.jsx";
import Dashboard from "./buyer/dashboard.jsx";
import Products from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/contact.jsx";
import Cartpage from "./pages/cartpage.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./pages/footer.jsx";

import lady from "./images/lady1.jpg";

function App() {
  const [addedToCart, setAddedToCart] = useState({});
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        alert("Already added — increasing quantity");
      }

      if (existing) {
        // already in cart — bump its quantity by 1
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, }
            : item,
        );
      } else {
        // new product — add it with quantity 1
        return [...prev, { ...product, quantity: 1, }];
      }
    });
  }
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-gray-100">
      <Announcement />
      <Navbar
        addedToCart={addedToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              handleAddToCart={handleAddToCart}
              addedToCart={addedToCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/cartpage"
          element={
            <Cartpage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
