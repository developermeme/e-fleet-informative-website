import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About E-Fleet" color="blue" />
          <p>
            We help organizations track, analyze and improve their fleet
            operations.
          </p>
          <p>
            We're passionate about making it easy to manage a fleet so
            organizations can spend more time focusing on their own mission.
            Fleet operations are complex and difficult to manage. People start
            out trying to use spreadsheets but quickly outgrow them
          </p>
          <Button content="Why E-Fleet?" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Simple"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Collaborative"
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Comprehensive"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="Informative"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
