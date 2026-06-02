import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Movies from "./pages/Movies";
import ConditionsofUse from "./pages/ConditionsofUse";
import Top from "./pages/Top";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
            <Route path="/conditionsofuse" element={<ConditionsofUse />} />
            <Route path="/top" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
