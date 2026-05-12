import React, { useState } from "react";
import Bg from "../images/per3.jpg";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-950 mt-10">
      <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/20 max-w-4xl w-full">
        {/* LEFT - Image Side */}
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className="relative w-full h-full min-h-[580px] bg-no-repeat bg-cover bg-center flex items-end justify-center"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Tagline */}
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="relative z-10 text-yellow-500 text-4xl mb-10 text-center leading-snug drop-shadow-lg"
          >
            A Scent That <br /> Defines You
          </p>
        </div>

        {/* RIGHT - Form Side */}
        <div className="bg-gray-950 border border-yellow-900/30 p-10 flex flex-col justify-center">
          {/* Brand name */}
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl mb-6"
          >
            Nazzy Aura Scents
          </p>

          <h1 className="text-4xl font-semibold text-white">Welcome Back</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Please login to your account
          </p>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent border border-yellow-700/50 focus:border-yellow-500 outline-none text-white rounded-md p-3 placeholder-gray-600 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500 text-sm transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-yellow-600 text-sm hover:text-yellow-400 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f5d485)",
              }}
              className="w-full text-black font-semibold py-3 rounded-md mt-2 hover:opacity-90 transition duration-300 tracking-wide"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-8 text-gray-500 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}

export default Login;
