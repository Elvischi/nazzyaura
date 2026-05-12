import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bg from "../images/per3.jpg";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-950 py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full bg-black rounded-xl overflow-hidden shadow-2xl shadow-yellow-900/20">
        {/* ── Left — Image Side ── */}
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className="relative w-full min-h-[300px] md:min-h-[700px] bg-cover bg-center flex justify-center items-end"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Tagline */}
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="relative z-10 text-yellow-500 text-4xl text-center leading-snug drop-shadow-lg mb-10"
          >
            A Scent That <br /> Defines You
          </p>
        </div>

        {/* ── Right — Form Side ── */}
        <div className="bg-gray-950 border border-yellow-900/30 p-8 flex flex-col justify-center">
          {/* Brand name */}
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl mb-4"
          >
            Nazzy Aura Scents
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-white">Create Account</h1>
          <p className="text-gray-500 mt-1 mb-6 text-sm">
            Sign up to get started
          </p>

          {/* Gold divider */}
          <div className="w-10 h-[1px] bg-yellow-700 mb-6" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First + Last name row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs tracking-widest uppercase">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs tracking-widest uppercase">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs tracking-widest uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500 text-xs transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Repeat Password */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs tracking-widest uppercase">
                Repeat Password
              </label>
              <div className="relative">
                <input
                  type={showRepeatPassword ? "text" : "password"}
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  className={`w-full bg-transparent border focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300 text-sm ${
                    passwordError ? "border-red-500" : "border-yellow-700/50"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500 text-xs transition"
                >
                  {showRepeatPassword ? "Hide" : "Show"}
                </button>
              </div>
              {/* Password error */}
              {passwordError && (
                <p className="text-red-400 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f5d485)",
              }}
              className="w-full text-black font-semibold py-3 rounded-md mt-2 hover:opacity-90 transition duration-300 tracking-wide"
            >
              Create Account
            </button>
          </form>

          {/* Login link */}
          <p className="mt-6 text-gray-500 text-sm text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}

export default Signup;
