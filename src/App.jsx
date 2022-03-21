import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Terms from "./sections/Terms";
import Index from "./sections/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<About />} />
      <Route path="/Starter" element={<Starter />} />
      <Route path="/About" element={<About />} />
      <Route path="/Why" element={<Why />} />
      <Route path="/ScrollToTop" element={<ScrollToTop />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}

export default App;
