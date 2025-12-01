import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Register from "./pages/Register";        // ⬅ IMPORTANT
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Profile from "./pages/Profile";
import OtpLogin from "./pages/OtpLogin";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />   {/* ⬅ FIX */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<OtpLogin />} />
      </Routes>
    </>
  );
}
