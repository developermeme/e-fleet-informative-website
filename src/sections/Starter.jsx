import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import HubMap from "../assets/HubMap.png";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            Manage Costs Effectively and Gain Visibility into Fleet Operations
          </h1>
          <p>
            Replace spreadsheets and paper with a centralized mobile fleet
            management solution designed to make your work easier. Fully
            optimize your fleet by giving fleet managers, drivers, technicians,
            parts managers, and other personnel access to the tools and
            information they need
          </p>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              color="pink"
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={HubMap} alt="Work Image" />
        </motion.div>
      </div>
    </div>
  );
}
