import React from "react";

import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import Starter from "./Starter";
import Why from "./Why";
import Blogs from "./Blogs";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import Terms from "./Terms";
import Navbar from "../components/Navbar";
import Steps from "./Steps";

export default function Index() {
  return (
    <>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />

        <Starter />
        <About />
        <Why />
        {/* <Testimonials /> */}
        <Steps/>
        <Blogs />
        <Footer />
      </motion.div>
    </>
  );
}
