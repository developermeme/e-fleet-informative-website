import React from 'react'
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import Starter from "./Starter";
import Why from "./Why";
import Blogs from "./Blogs";
import ScrollToTop from "../components/ScrollToTop";

import { Route, Routes } from "react-router-dom";
import Terms from "./Terms";
import Index from "./index";
import PrivacyPolicy from './PrivacyPolicy';

export default function All() {
  return (
    <Routes>
    <Route exact path="/" element={<Index />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/Privacy" element={<PrivacyPolicy />} />

    <Route path="/about" element={<About />} />
    <Route path="/Starter" element={<Starter />} />
    <Route path="/About" element={<About />} />
    <Route path="/Why" element={<Why />} />
    <Route path="/ScrollToTop" element={<ScrollToTop />} />
    <Route path="/Blogs" element={<Blogs />} />
    <Route path="/footer" element={<Footer />} />
  </Routes>
  )
}
