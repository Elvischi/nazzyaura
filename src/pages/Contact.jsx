import { useState, useEffect } from "react";
import Bg1 from "../images/per6.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    text: "We invite you to connect with us at your convenience. Whether you seek further insight into our collections or require personalized assistance, our team is dedicated to serving you with the utmost care.",
  },
  {
    id: 2,
    text: "Your experience is of the highest importance to us. For inquiries, bespoke assistance, or to share your valued feedback, we are always at your service.",
  },
  {
    id: 3,
    text: "Should you desire guidance or have questions regarding our offerings, we would be delighted to assist you with discretion and attention to detail.",
  },
  {
    id: 4,
    text: "We are committed to delivering an exceptional experience. For any inquiries or tailored support, please feel free to reach out — our team is here with elegance and care.",
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

// ─── Main Component ────────────────────────────────────────
function Contact() {
  return (
    <div className="bg-gray-950">
      <ContactHeader />
      <ContactUs />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────
function ContactHeader() {
  const [currentInfo, setCurrentInfo] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: fade out
      setFade(false);

      // Step 2: after fade out, change text and fade in
      setTimeout(() => {
        setCurrentInfo((prev) => (prev + 1) % contactInfo.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${Bg1})` }}
      className="relative bg-no-repeat bg-cover bg-center w-full min-h-[80vh] flex items-center justify-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" /> 

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 max-w-3xl">
        {/* Script label */}
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-3xl mb-4"
        >
          We'd Love to Hear From You
        </p>

        {/* Main title */}
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-6xl font-bold text-white mb-6 tracking-wide"
        >
          Contact Us
        </h1>

        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-yellow-500 mb-8" />

        {/* Animated rotating text */}
        <p
          className="text-gray-300 text-lg font-light leading-relaxed transition-opacity duration-500"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {contactInfo[currentInfo].text}
        </p>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-8">
          {contactInfo.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentInfo(index)}
              className={`rounded-full transition-all duration-300 ${
                currentInfo === index
                  ? "bg-yellow-500 w-6 h-2"
                  : "bg-gray-600 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Contact Info + Form Section ──────────────────────────
function ContactUs() {
  return (
    <div className="bg-gray-950 w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl mb-2"
          >
            Get In Touch
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl font-bold text-white tracking-wide"
          >
            Contact Information
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mt-4" />
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 mb-16">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center gap-3 bg-gray-900 border border-yellow-900/30 rounded-xl p-8 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20 transition duration-300"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full border border-yellow-700/50 flex items-center justify-center">
                {card.icon}
              </div>
              <p className="text-yellow-500 text-xs tracking-widest uppercase font-semibold">
                {card.label}
              </p>
              <p className="text-gray-400 text-sm text-center">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="w-full h-[2px] bg-yellow-900/30 mb-16" />

        {/* Form Section */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-14">
          {/* Left — Text */}
          <div className="flex flex-col justify-center gap-6">
            <p
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="text-yellow-500 text-2xl"
            >
              Send Us a Message
            </p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl font-bold text-white"
            >
              We Are Always <br />
              <span className="text-yellow-500">At Your Service</span>
            </h2>
            <div className="w-10 h-[1px] bg-yellow-700" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you're looking for your signature scent, need help with an
              order, or simply want to share your experience — we are here for
              you. Reach out and our team will respond with care and elegance.
            </p>

            {/* Contact quick info */}
            <div className="flex flex-col gap-3 mt-2">
              <p className="flex items-center gap-3 text-gray-500 text-sm">
                <FaPhoneAlt className="text-yellow-600" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3 text-gray-500 text-sm">
                <MdAttachEmail className="text-yellow-600" />
                contact@nazzyperfume.com
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md py-3 px-4 placeholder-gray-600 transition duration-300"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md py-3 px-4 placeholder-gray-600 transition duration-300"
            />
            <input
              type="text"
              placeholder="Your Location"
              className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md py-3 px-4 placeholder-gray-600 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md py-3 px-4 placeholder-gray-600 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md py-3 px-4 placeholder-gray-600 transition duration-300 resize-none"
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f5d485)",
              }}
              className="w-full text-black font-semibold py-3 rounded-md hover:opacity-90 transition duration-300 tracking-wide mt-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
