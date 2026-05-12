import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-3xl"
          >
            Nazzy Perfume
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition duration-300 ${
                isActive(link.path)
                  ? "text-yellow-500 border-b border-yellow-500"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side — Auth + Cart */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-400 text-sm tracking-widest uppercase hover:text-yellow-400 transition duration-300"
          >
            Login
          </Link>

          <Link to="/signup">
            <button
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f5d485)",
              }}
              className="text-black text-sm font-semibold py-2 px-5 rounded-sm hover:opacity-90 transition duration-300 tracking-wide"
            >
              Sign Up
            </button>
          </Link>

          {/* Cart */}
          <button className="relative text-white hover:text-yellow-400 transition duration-300">
            <GiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile — Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button className="relative text-white hover:text-yellow-400 transition duration-300">
            <GiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-400 transition duration-300 text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-yellow-900/30 flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm tracking-widest uppercase transition duration-300 ${
                isActive(link.path)
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-16 h-[1px] bg-yellow-900" />

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 text-sm tracking-widest uppercase hover:text-yellow-400 transition duration-300"
          >
            Login
          </Link>

          <Link to="/signup" onClick={() => setIsOpen(false)}>
            <button
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f5d485)",
              }}
              className="text-black text-sm font-semibold py-2 px-8 rounded-sm hover:opacity-90 transition duration-300 tracking-wide"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </nav>
  );
};

export default Navbar;
