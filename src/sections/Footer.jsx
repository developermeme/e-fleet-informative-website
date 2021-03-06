import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";
import Applestore from "../assets/Applestore.png";
import PlayStore1 from "../assets/PlayStore1.png";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" id="footer" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
           
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p></p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
           
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
              {/* <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li> */}
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="/Terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="/Privacy">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
           
            transition={{ duration: 0.5 }}
          >
            <ul>
              <li>
                <img src={Applestore} />
              </li>
              <li>
                {" "}
                <img src={PlayStore1} />
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
           
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">contact@meme-usa.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+1 860 904 7490</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#">
                    {" "}
                    121 W Dudley Town Road, Unit B, Bloomfield, Connecticut
                    06002
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright ??? 2022. All Rights Reserved.</p>
          </div>
          {/* <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
