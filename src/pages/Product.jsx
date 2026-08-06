import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import perfume from "../images/per.jpg";
import perfume2 from "../images/per2.jpg";
import perfume3 from "../images/per3.jpg";
import perfume18 from "../images/per18.jpg";
import perfume9 from "../images/per9.jpg";
import perfume10 from "../images/per10.jpg";
import perfume14 from "../images/per14.jpg";
import perfume12 from "../images/per12.jpg";
import perfume13 from "../images/per13.jpg";
import perfume19 from "../images/per19.jpg";
import perfume21 from "../images/per21.jpg";
import perfume20 from "../images/per20.jpg";
import lady1 from "../images/lady1.jpg";
import lady2 from "../images/lady2.jpg";
import lady3 from "../images/lady3.jpg";
import lady4 from "../images/lady4.jpg";
import lady5 from "../images/lady5.jpg";
import lady6 from "../images/lady6.jpg";
import lady7 from "../images/lady7.jpg";
import lady8 from "../images/lady8.jpg";
import scent from "../images/scent1.jpeg";

// ─── Products Data ─────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Velour Mystique",
    category: "unisex",
    price: 20000 ,
    description:
      "A deep, seductive blend of warm amber and soft vanilla wrapped in delicate florals — smooth, elegant, unforgettable.",
    image: perfume,
  },
  {
    id: 2,
    name: "Noir Éclipse",
    category: "unisex",
    price: 20000,
    description:
      "Dark woods meet spicy saffron and smoky oud, creating a bold, magnetic scent made for confident nights.",
    image: perfume2,
  },
  {
    id: 3,
    name: "Azure Bloom",
    category: "unisex",
    price: 20000,
    description:
      "A fresh, aquatic blend of citrus and marine notes with a touch of white musk — clean, invigorating, and endlessly appealing.",
    image: perfume3,
  },
  {
    id: 4,
    name: "Hurrcan",
    category: "men",
    price: 35000,
    description:
      "A powerful, masculine scent inspired by speed and intensity. Bold cedarwood and black pepper with a warm amber base.",
    image: perfume18,
  },
  {
    id: 5,
    name: "Club De Nuit",
    category: "men",
    price: 50000,
    description:
      "An iconic fragrance of sophistication. Fresh blackcurrant and birch with a rich, smoky dry-down.",
    image: perfume14,
  },
  {
    id: 6,
    name: "Scandal",
    category: "men",
    price: 30500,
    description:
      "A daring, provocative scent — honey, blood orange, and patchouli in a bold, unforgettable signature.",
    image: perfume12,
  },
  {
    id: 7,
    name: "9Pm",
    category: "men",
    price: 25000,
    description:
      "Made for the night. Lavender and apple open into a rich vanilla and musk heart — irresistibly seductive.",
    image: perfume13,
  },
  {
    id: 8,
    name: "Sauvage",
    category: "men",
    price: 48000,
    description:
      "Raw and noble. Bergamot freshness over a Sichuan pepper heart with a warm Ambroxan signature.",
    image: perfume9,
  },
  {
    id: 9,
    name: "Jean Paul Gaultier",
    category: "men",
    price: 55000,
    description:
      "A timeless classic. Lavender, mint, and warm vanilla in an iconic masculine fragrance.",
    image: perfume10,
  },
  {
    id: 10,
    name: "GUCCI",
    category: "men",
    price: 80000,
    description:
      "Italian luxury in a bottle. Citrus top notes over a heart of florals and a rich woody base.",
    image: perfume19,
  },
  {
    id: 11,
    name: "Prada",
    category: "men",
    price: 40000,
    description:
      "Refined and understated elegance. Neroli, iris, and vetiver in a clean, sophisticated composition.",
    image: perfume20,
  },
  {
    id: 12,
    name: "YSL",
    category: "men",
    price: 39900,
    description:
      "Sensual and modern. Bergamot and grapefruit open into a lavender heart over a warm amber base.",
    image: perfume21,
  },
  {
    id: 13,
    name: "Carolina",
    category: "women",
    price: 39900,
    description:
      "A graceful floral bouquet — rose, peony, and jasmine wrapped in soft musk. Feminine and timeless.",
    image: lady1,
  },
  {
    id: 14,
    name: "La Belle",
    category: "women",
    price: 39900,
    description:
      "A romantic, gourmand fragrance — vanilla, pear, and jasmine in a warm, sensual composition.",
    image: lady2,
  },
  {
    id: 15,
    name: "So Scandal",
    category: "women",
    price: 39900,
    description:
      "Bold and unapologetic. Mandarin and honey over a rich jasmine and vanilla heart.",
    image: lady3,
  },
  {
    id: 16,
    name: "YSL",
    category: "women",
    price: 39900,
    description:
      "Intoxicating and modern — coffee, white flowers, and vanilla in a daring feminine statement.",
    image: lady4,
  },
  {
    id: 17,
    name: "Black Opium",
    category: "women",
    price: 39900,
    description:
      "Addictive and intense. Coffee, vanilla, and white florals in an electrifying, rock-chic signature.",
    image: lady5,
  },
  {
    id: 18,
    name: "Rome Besella",
    category: "women",
    price: 39900,
    description:
      "A sophisticated Italian-inspired floral — bergamot, rose, and sandalwood in perfect harmony.",
    image: lady6,
  },
  {
    id: 19,
    name: "My Way",
    category: "women",
    price: 39900,
    description:
      "A radiant floral woody — tuberose and magnolia over a warm base of musk and cedarwood.",
    image: lady7,
  },
  {
    id: 20,
    name: "Jadore",
    category: "women",
    price: 40500,
    description:
      "The ultimate feminine fragrance. Ylang-ylang, rose, and jasmine in a luxurious floral symphony.",
    image: lady8,
  },
  {
    id: 21,
    name: "Electric Scent Machine",
    category: "scent",
    price: 260000,
    description:
      "Transform any space into a luxury sensory experience. Our commercial-grade scent diffuser covers up to 5,000 sq ft with precision-controlled fragrance.",
    image: scent,
  },
];

// ─── Category Tabs ─────────────────────────────────────────
const categories = [
  { id: "all", label: "All" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "unisex", label: "Unisex" },
  { id: "scent", label: "Scent Machine" },
];

// ─── Main Component ────────────────────────────────────────
function Products({ handleAddToCart, addedToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [flash, setFlash] = useState(null)
  const [previewProduct, setPreviewProduct] = useState(null);

  //flash add to cart
  function addedFlash(product) {
    handleAddToCart(product);
    setFlash();
    setTimeout(() => setFlash, 900)
  }

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Size change per product
  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  

  return (
    <div className="bg-gray-950 min-h-screen w-full pb-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center pt-24 pb-10 px-6">
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-2xl mb-2"
        >
          Explore the Collection
        </p>
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-5xl font-bold text-white tracking-wide"
        >
          Our Products
        </h1>
        <div className="w-16 h-[2px] bg-yellow-500 mt-4 mb-10" />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-gray-900 border border-yellow-900/30 rounded-full px-2 py-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition duration-300 ${
                selectedCategory === cat.id
                  ? "bg-yellow-500 text-black font-semibold"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="text-gray-600 text-xs tracking-widest uppercase mt-4">
          Showing {filteredProducts.length} products
        </p>
      </div>

      {/* ── Product Grid ── */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-gray-900 border border-yellow-900/30 rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20 transition duration-300 group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-black/60 text-yellow-500 text-xs tracking-widest uppercase px-2 py-1 rounded-sm border border-yellow-900/40">
                {product.category}
              </span>
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-xl font-semibold"
              >
                {product.name}
              </h2>
              <p className="text-yellow-500 font-semibold text-lg">
                ₦{product.price.toLocaleString()}
              </p>
              <div className="w-8 h-[1px] bg-yellow-900" />

              {/* Size Selector - hide for scent machine */}
              {product.category !== "scent" && (
                <select
                  value={selectedSizes[product.id] || "100ml"}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  className="bg-gray-800 border border-yellow-700/40 text-gray-400 text-sm rounded-md px-3 py-2 outline-none focus:border-yellow-500 transition duration-300 cursor-pointer"
                >
                  <option value="100ml">100ml</option>
                  <option value="50ml">50ml</option>
                  <option value="30ml">30ml</option>
                </select>
              )}

              {/* Buttons */}
              <div className="flex items-center gap-2 mt-auto">
                <button
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                  }}
                  className="flex-1 text-black text-sm font-semibold py-2 rounded-sm hover:opacity-90 transition duration-300 tracking-wide"
                  onClick={() => setPreviewProduct(product)}
                >
                  Preview
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-10 h-10 rounded-sm border flex items-center justify-center transition duration-300 border-yellow-700/50 text-gray-400 hover:border-yellow-500 hover:text-yellow-400`}
                >
                  <GiShoppingCart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── rendered OUTSIDE the grid */}
      {previewProduct && (
        // The dark overlay background
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          onClick={() => setPreviewProduct(null)}
        >
          {/* The modal card */}
          <div
            className="bg-gray-900 border border-yellow-900/30 rounded-xl overflow-hidden max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl shadow-yellow-900/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setPreviewProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 border border-yellow-900/30 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-500 transition duration-300"
            >
              <HiX />
            </button>

            {/* Product Image */}
            <div className="relative">
              <img
                src={previewProduct.image}
                alt={previewProduct.name}
                className="w-full h-64 md:h-full object-cover"
              />
              {/* Category badge on modal image */}
              <span className="absolute top-3 left-3 bg-black/60 text-yellow-500 text-xs tracking-widest uppercase px-2 py-1 rounded-sm border border-yellow-900/40">
                {previewProduct.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-8 flex flex-col gap-4 justify-center">
              {/* Brand */}
              <p
                style={{ fontFamily: "'Pinyon Script', cursive" }}
                className="text-yellow-500 text-xl"
              >
                Nazzy Perfume
              </p>

              {/* Name */}
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-3xl font-semibold leading-tight"
              >
                {previewProduct.name}
              </h2>

              {/* Gold divider */}
              <div className="w-8 h-[1px] bg-yellow-700" />

              {/* Price */}
              <p className="text-yellow-500 font-semibold text-2xl">
                {previewProduct.price}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {previewProduct.description}
              </p>

              {/* Size selector in modal - hide for scent machine */}
              {previewProduct.category !== "scent" && (
                <select className="bg-gray-800 border border-yellow-700/40 text-gray-400 text-sm rounded-md px-3 py-2 outline-none focus:border-yellow-500 transition duration-300 cursor-pointer">
                  <option value="100ml">100ml</option>
                  <option value="50ml">50ml</option>
                  <option value="30ml">30ml</option>
                </select>
              )}

              {/* Step F: Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                  }}
                  className="flex-1 text-black font-semibold py-2 rounded-sm hover:opacity-90 transition duration-300 tracking-wide"
                  onClick={() => {
                    handleAddToCart(previewProduct);
                    setPreviewProduct(null);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setPreviewProduct(null)}
                  className="flex-1 border border-yellow-700/50 text-gray-400 py-2 rounded-sm hover:border-yellow-500 hover:text-yellow-400 transition duration-300 tracking-wide"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}


export default Products;
