import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Terms.scss";
import { reveal } from "../utils/Animations";
import Navbar from "../components/Navbar";

export default function Terms() {
  const [element, controls] = useScroll();
  return (
    <div className="Terms-container" id="about" ref={element}>
    
      <div className="container">
        
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
         
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Terms & Conditions" color="blue" />
          <p>
            We help organizations track, analyze and improve their fleet
            operations.
          </p>
          <p>
            1. The rider needs to be 18 years of age or older to rent a bike
            that requires a valid Driving Licence. If the rider is under the
            stipulated age, his or her order will be cancelled without any
            refund or can choose to Ride a vehicle that do not require a driving
            licence (if license free vehicle is available)
            <br />
            <br />
            2. The documents mentioned below need to be verified, in the mobile
            app, for each rider.
            <ul /> Document 1 – Driving License <ul /> Document 2 – Passport,
            Election Card, Aadhaar Card or (Any Government ID).
            <ul /> Document 3 – Any Other Government ID other than Document 2 or
            College/ Work ID or, any other local ID. <br /> <br />
            3. Two-wheeler bookings are subject to availability. EFLEET BY MEME
            BIKE reserves the right to cancel any booking if deemed necessary.
            <br /> <br /> 4. Rider should respect and follow Traffic rules and
            regulations. All Challans issued due to rider negligence need to be
            paid in full to the penalizing authority.
            <br /> <br /> 5. Driving under the influence of Alcohol/Drugs is
            strictly prohibited. EFLEET BY MEME BIKE will not be responsible to
            compensate for any mishaps and their consequences in such cases. The
            customer will be liable to pay for all damages to EFLEET BY MEME
            BIKE for the same.
            <br /> <br /> 6. In case a customer feels that they will be late for
            the drop, they should call the field executive or customer care and
            ask for a trip extension. Extensions are subject to availability.
            <br /> <br /> 7. The Pick-up date, time and location cannot be
            changed once a booking is confirmed.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
