import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./pages/footer.jsx";

function App() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
