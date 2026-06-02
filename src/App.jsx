import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Favorites from "./pages/Favorites";
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
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
