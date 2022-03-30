import React from "react";
import Navbar from "../components/Navbar";

import { useScroll } from "../components/useScroll";

import { motion } from "framer-motion";
import ridermap from "../assets/ridermap.png";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();
  return (
    <div className="main-container" ref={element}>
      {/* <Navbar /> */}
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>E-Fleet.World</h1>
          <p>
            By the rapid growing e commerce business , delivery as last miles
            become so critical to compete the final delivery to the consumer
            hands, as delivery count on each individual by any form of vehicle,
            such variety but also accuracy is very challenging for many delivery
            business owners.<br/><br/> We create this Efleet software by both website and
            mobile apps , provide all the tool for company and individual rider
            to be accurate interactive , in time monitoring for all the move and
            delivery approval , smart out the best efficiency route for daily
            delivery with our unique AI tech knowledge. <br/><br/>Efleet provide very
            flexible way of use, from one vehicle to hundreds and thousands ,
            always trackable , Automatically generate the payroll digitalized by
            the different way to calculate as wish. Save so much man power and
            avoid any mistake.<br/><br/> Please enjoy to use this very affordable , hassle
            free new software platform.
            <ul>
              <li>Pan Pan</li>
              <li>Founder</li>
              <li> Last Miles Veteran</li>
              <li>California</li>
            </ul>
          </p>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={ridermap} alt="Work Image" />
        </motion.div>
      </div>
    </div>
  );
}
