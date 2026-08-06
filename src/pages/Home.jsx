import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
// import MapView from "./map.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot, FaArrowRight } from "react-icons/fa6";
import perfumeBackground from "../images/per8.jpg";
import perfume2 from "../images/per.jpg";
import perfume3 from "../images/per2.jpg";
import perfume4 from "../images/per3.jpg";
import perfume5 from "../images/per17.jpg";



const products = [
  {
    id: 1,
    name: "Velour Mystique",
    description:
      "A deep, seductive blend of warm amber and soft vanilla wrapped in delicate florals — smooth, elegant, unforgettable.",
    price: "$39.99",
    image: perfume2,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Noir Éclipse",
    description:
      "Dark woods meet spicy saffron and smoky oud, creating a bold, magnetic scent made for confident nights.",
    price: "$39.99",
    image: perfume3,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Azure Bloom",
    badge: "Best Seller",
    description:
      "A fresh, aquatic blend of citrus and marine notes with a touch of white musk — clean, invigorating, and endlessly appealing.",
    price: "$39.99",
    image: perfume4,
  },
  {
    id: 4,
    name: "Crimson Whisper",
    badge: "Best Seller",
    description:
      "A passionate fusion of red berries and warm spices, accented with a hint of vanilla — bold, romantic, and utterly captivating.",
    price: "$39.99",
    image: perfume5,
  },
];

// ─── Contact Info Cards Data ───────────────────────────────
const contactCards = [
  {
    id: 1,
    icon: <FaPhoneAlt className="text-xl text-yellow-500" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    id: 2,
    icon: <MdAttachEmail className="text-xl text-yellow-500" />,
    label: "Email",
    value: "contact@nazzyperfume.com",
  },
  {
    id: 3,
    icon: <FaMapLocationDot className="text-xl text-yellow-500" />,
    label: "Address",
    value: "123 Perfume Street, Fragrance City",
  },
];



function Home(){
  return (
    <>
      <Header />
      <ProductCard />
      <AboutUs />
      <ContactUs />
      {/* <MapView /> */}
    </>
  );
}


function Header() {
  return (
    <div className="relative min-h-[90vh] w-full bg-black overflow-hidden ">

      {/* Background Image - right side only */}
      <div
        style={{ backgroundImage: `url(${perfumeBackground})` }}
        className="absolute right-0 top-0 w-[55%] h-full bg-cover bg-center"
      />

      {/* Gradient fade - image blends into black */}
      <div className="absolute right-[54%] top-0 w-[30%] h-full bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

      {/* Dark overlay on image for depth */}
      <div className="absolute right-0 top-0 w-[55%] h-full bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start gap-6 max-w-2xl h-full min-h-[90vh] px-16">

        {/* Small label */}
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-2xl"
        >
          A Scent That Defines You
        </p>

        {/* Main heading */}
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-7xl  font-bold text-white leading-tight"
        >
          Nazzy <br />
          <span className="text-yellow-500">Perfume</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
          Discover a world of rare and exquisite fragrances crafted for those
          who appreciate the finer things in life. Your signature scent awaits.
        </p>

        {/* Divider line */}
        <div className="w-16 h-[2px] bg-yellow-500" />

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <Link to="/products">
            <button
              style={{ background: "linear-gradient(135deg, #c9a84c, #f5d485)" }}
              className="text-black font-semibold py-3 px-8 rounded-sm hover:opacity-90 transition duration-300 flex items-center gap-2 tracking-wide"
            >
              Shop Now <FaArrowRight />
            </button>
          </Link>

          <Link to="/about">
            <button className="text-white border border-yellow-700/50 py-3 px-8 rounded-sm hover:border-yellow-500 hover:text-yellow-400 transition duration-300 tracking-wide">
              Our Story
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10 mt-6">
          <div>
            <p className="text-white text-2xl font-bold">200+</p>
            <p className="text-gray-500 text-sm">Fragrances</p>
          </div>
          <div className="w-[1px] h-10 bg-yellow-900" />
          <div>
            <p className="text-white text-2xl font-bold">50k+</p>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div className="w-[1px] h-10 bg-yellow-900" />
          <div>
            <p className="text-white text-2xl font-bold">15+</p>
            <p className="text-gray-500 text-sm">Awards Won</p>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}



function ProductCard() {
  const [previewProduct, setPreviewProduct] = useState(null);
  return (
    <section className="w-full bg-gray-950 py-20 px-6">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12">
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-2xl mb-2"
        >
          Handpicked For You
        </p>
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-5xl font-bold text-white tracking-wide"
        >
          Popular Products
        </h1>
        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-yellow-500 mt-4" />
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-gray-900 border border-yellow-900/30 rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20 transition duration-300 group"
          >
            {/* Image container */}
            <div className="relative overflow-hidden">
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-sm tracking-wide">
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              {/* Product name */}
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-xl text-white font-semibold"
              >
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Gold divider */}
              <div className="w-8 h-[1px] bg-yellow-700" />

              {/* Button */}
              <button
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                }}
                className="w-full text-black font-semibold py-2 rounded-sm hover:opacity-90 transition duration-300 tracking-wide mt-auto"
                onClick={() => setPreviewProduct(product)}
              >
                Preview
              </button>
            </div>
            {previewProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30">
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] bg-gray-950 relative rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={previewProduct.image}
                      alt={previewProduct.name}
                      className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8">
                    <p
                      style={{ fontFamily: "'Pinyon Script', cursive" }}
                      className="text-yellow-500 mb-8 text-2xl"
                    >
                      Nazzy Perfume
                    </p>
                    <h2
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-white text-3xl font-semibold leading-tight"
                    >
                      {previewProduct.name}
                    </h2>
                    <div className="w-10 h-[1px] bg-yellow-500" />
                    <span className="text-yellow-500 text-xl font-bold">
                      {previewProduct.price}
                    </span>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {previewProduct.description}
                    </p>
                    <button
                      className="border border-yellow-700/50 text-gray-400 py-2 rounded-sm hover:border-yellow-500 hover:text-yellow-400 transition duration-300 tracking-wide mt-4 uppercase"
                      onClick={() => setPreviewProduct(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link to="/products">
          <button className="border border-yellow-700/50 text-white py-3 px-10 rounded-sm hover:border-yellow-500 hover:text-yellow-400 transition duration-300 tracking-wide">
            View All Products
          </button>
        </Link>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </section>
  );
}



function AboutUs() {
  return (
    <section className="bg-gray-950 py-20 px-6 border-t border-yellow-900/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-14 items-center">
        {/* Left — Image */}
        <div className="relative hidden md:block">
          <img
            src={perfume4}
            alt="about us"
            className="w-full h-[550px] object-cover rounded-xl shadow-2xl shadow-black/50"
          />
          {/* Gold offset border */}
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-yellow-700/30 rounded-xl" />

          {/* Floating badge */}
          <div className="absolute bottom-8 right-8 bg-black/70 border border-yellow-700/40 backdrop-blur-sm px-5 py-3 rounded-lg">
            <p
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="text-yellow-500 text-xl"
            >
              Since 2018
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-6">
          {/* Script label */}
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl"
          >
            Who We Are
          </p>

          {/* Main heading */}
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl font-bold text-white leading-tight"
          >
            About <br />
            <span className="text-yellow-500">Nazzy Perfume</span>
          </h2>

          {/* Gold divider */}
          <div className="w-12 h-[2px] bg-yellow-500" />

          {/* Paragraph */}
          <p className="text-gray-500 text-base leading-relaxed">
            At Nazzy Perfume, we believe that fragrance is more than just a
            scent — it's an{" "}
            <span className="text-yellow-500 italic">experience</span>. Our
            passion for perfumery drives us to curate a collection of unique,
            high-quality fragrances that inspire confidence and self-expression.
            Each scent is crafted with care, using the finest ingredients to
            create unforgettable aromas that resonate with your individuality.
          </p>

          <p className="text-gray-500 text-base leading-relaxed">
            Whether you're seeking a signature scent or a special gift, Nazzy
            Perfume is your destination for exceptional fragrances that elevate
            every moment.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/about">
              <button
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                }}
                className="text-black font-semibold py-3 px-8 rounded-sm hover:opacity-90 transition duration-300 tracking-wide"
              >
                Read More
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-white border border-yellow-700/50 py-3 px-8 rounded-sm hover:border-yellow-500 hover:text-yellow-400 transition duration-300 tracking-wide">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </section>
  );
}

 function ContactUs() {
  return (
    <div className="bg-gray-950 w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-md mb-5 tracking-widest uppercase text-center"
        >
          get in touch
        </p>
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-3xl text-white text-center mb-6"
        >
          Contact Information
        </h2>
        <div className="w-16 h-[2px] bg-yellow-500 mx-auto mb-14" />
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 mx-auto">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center gap-3 bg-gray-900 border border-yellow-900/30 rounded-xl p-8 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20 transition duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-yellow-700/50 flex items-center justify-center">
                {card.icon}
              </div>
              <p className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
                {card.label}
              </p>
              <p className="text-gray-300 text-sm text-center">{card.value}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] bg-yellow-900/30 my-16" />
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-20 w-full gap-10">
          <div className="flex flex-col justify-center text-white gap-5">
            <h3
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="text-yellow-400 capitalize text-2xl"
            >
              send us a message
            </h3>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-3xl capitalize font-bold"
            >
              we are always
              <br /> <span className="text-yellow-500">at your service</span>
            </h1>
            <div className="w-10 h-[2px] bg-yellow-700" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you're looking for your signature scent, need help with an
              order, or simply want to share your experience — we are here for
              you. Reach out and our team will respond with care and elegance.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <p className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhoneAlt className="text-yellow-600" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3 text-gray-400 text-sm">
                <MdAttachEmail className="text-yellow-600" />
                contact@nazzyperfume.com
              </p>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-yellow-700/50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-white placeholder-gray-600"
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="bg-transparent border border-yellow-700/50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-white placeholder-gray-600"
              />
              <input
                type="text"
                placeholder="Your location"
                className="bg-transparent border border-yellow-700/50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-white placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-yellow-700/50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-white placeholder-gray-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-transparent border border-yellow-700/50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-white placeholder-gray-600 resize-none"
              ></textarea>
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f5d485)",
                }}
                className=" font-semibold text-black py-2 px-6 rounded-md hover:opacity-90 transition duration-300 tracking-widest mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Footer() {
//   return (
//     <div className="bg-black py-4">
//       <p className="text-white text-center">
//         &copy; {new Date().getFullYear()} Nazzy Aura. All rights reserved.
//       </p>
//     </div>
//   );
// }

export default Home

/* <p className="text-gray-700 text-lg leading-relaxed">
          At Scent Haven, we believe that fragrance is more than just a scent — it's an experience. Our passion for perfumery drives us to curate a collection of unique, high-quality fragrances that inspire confidence and self-expression. Each scent in our collection is crafted with care, using the finest ingredients to create unforgettable aromas that resonate with your individuality. Whether you're seeking a signature scent or a special gift, Scent Haven is your destination for exceptional fragrances that elevate every moment.
        </p> */