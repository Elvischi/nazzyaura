import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-yellow-900/30 pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-10">
        {/* Main Grid */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <p
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="text-yellow-500 text-3xl"
            >
              Nazzy Perfume
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your favorite fragrance destination. Crafted for those who
              appreciate the finer things in life.
            </p>
            {/* Gold divider */}
            <div className="w-10 h-[1px] bg-yellow-700" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-semibold tracking-widest uppercase">
              Contact Us
            </h2>
            {/* Gold underline */}
            <div className="w-8 h-[1px] bg-yellow-500" />

            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-3 text-gray-500 text-sm hover:text-yellow-400 transition duration-300 cursor-pointer">
                <FaPhoneAlt className="text-yellow-600 shrink-0" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3 text-gray-500 text-sm hover:text-yellow-400 transition duration-300 cursor-pointer">
                <MdAttachEmail className="text-yellow-600 shrink-0 text-base" />
                info@nazzyperfume.com
              </p>
              <p className="flex items-center gap-3 text-gray-500 text-sm hover:text-yellow-400 transition duration-300 cursor-pointer">
                <FaMapLocationDot className="text-yellow-600 shrink-0" />
                123 Perfume Street, Fragrance City
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-semibold tracking-widest uppercase">
              Quick Links
            </h2>
            {/* Gold underline */}
            <div className="w-8 h-[1px] bg-yellow-500" />

            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 text-sm hover:text-yellow-400 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-yellow-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-semibold tracking-widest uppercase">
              Follow Us
            </h2>
            {/* Gold underline */}
            <div className="w-8 h-[1px] bg-yellow-500" />

            <p className="text-gray-500 text-sm leading-relaxed">
              Stay connected for the latest updates and offers!
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-1">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-yellow-900/50 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-400 transition duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-yellow-900/50 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-400 transition duration-300"
              >
                <AiFillTikTok className="text-lg" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-yellow-900/50 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-400 transition duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="w-full h-[1px] bg-yellow-900/30 mt-12 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Nazzy Perfume. All rights
            reserved.
          </p>
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-xl"
          >
            A Scent That Defines You
          </p>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </footer>
  );
}

export default Footer;