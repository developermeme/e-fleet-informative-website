import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Why E-Fleet ?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
              Poor logistics in business will significantly affect your bottom
              line, and even if your company is successful, there is always room
              for improvement. Fortunately for managers, fleet logistics
              tracking and optimization programs are available to help automate
              processes and ensure that goods are moved in a timely,
              cost-effective, and consistent way
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video"></div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>Integration with other platforms</li>
              <li>
              Minimize Vehicle Risk
              </li>
              <li>Reduce Costs through Improved Efficiency</li>
              <li>Improvement of maintenance</li>
              <li>Ready to recieve service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
