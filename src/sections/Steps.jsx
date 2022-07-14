import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Steps.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";
import HubRegister from "../assets/HubRegister.jpg";

export default function Steps() {
  const [element, controls] = useScroll();
  const Steps = [
    `Step 1.Register Your Hub by giving accurate details and documents
  for joining as hub manager and Get approval mail from verification`,
    `Step 1.Register Your Hub by giving accurate details and documents
  for joining as hub manager and Get approval mail from verification`,
    `Step 1.Register Your Hub by giving accurate details and documents
  for joining as hub manager and Get approval mail from verification`,
    `Step 1.Register Your Hub by giving accurate details and documents
  for joining as hub manager and Get approval mail from verification`,
  ];
  return (
    <div className="Steps-container" id="services" ref={element}>
      <div className="Stepscontainer">
        <motion.div
          className="Steps-top"
          variants={topContainerAnimation}
         
          transition={{
            duration: 1,
          }}
        >
          <Title
            title="HOW TO USE THE APP IN SIMPLE STEPS"
            color="pink"
            lineCenter={true}
          />
          <Title title="Admin Panel" color="pink" lineCenter={true} />
          <div className="Steps-subTitle"></div>
        </motion.div>
        <div className="Steps-content">
          <motion.div
            variants={videoAnimation}
           
            transition={{ type: "tween", duration: 0.5 }}
          >
            <p>
              Step 1.Register Your Hub by giving accurate details and documents
              for joining as hub manager and Get approval mail from verification
              team.
              <br /> <br /> Step 2 Once Approved as Hub manager, Login to the
              Admin Panel using credentials which are sent to the registered
              mail ID. .
              <br /> <br />
              Step 3. Then in Packages {">"} Settings, the manager assigns the
              parcel configuration and zone settings.
              <br /> <br /> Step 4 Then in Riders, the Manager can add new
              riders for delivery by verifying their profile and the manager can
              also update/delete the existing riders.
              <br /> <br /> Step 5 Then in Vehicle Details, the manager can
              add/update/delete the company vehicles.
              <br /> <br /> Step 6 Then in Packages {">"}Received Packages, the
              manager can add packages by csv sheet which received at hub daily
              and verify it by scanning the barcode in the packages using our
              own scanning mobile application.
              <br /> <br /> Step 7 Then in Packages {">"} Task Allocation, the
              manager can assign packages to the riders.
              <br /> <br /> Step 8 In Payment, the manager can generate payroll
              for riders which they deliver for a particular period.
              <br /> <br /> Step 9 In Support Center, the manager can chat with
              riders 24/7 and customer support.
            </p>
            <Title title="Mobile Application" color="blue" />

            <p>
              Step 1: A person can register their profile from hub directly to
              join as rider in that particular hub location.
              <br /> <br /> Step 2: Once registered, rider will receive username
              and password via registered email and rider can login using those
              credentials.
              <br /> <br />
              Step 3: Then Rider selects the vehicle type EV or FUEL. If a
              company EV vehicle, rider can scan the QR code in the allocated EV
              <br /> <br />
              Step 4: In Home Screen, Rider can find the Map for Deliver the
              packages, Total no of rides and Total Amount for pending payment
              period.
              <br /> <br />
              Step 5: In Task screen, Rider can view the ongoing tasks and
              previous tasks and rider can start the ongoing tasks by selecting
              the packages.
              <br /> <br /> Step 6: Once Start, Rider can navigate the package
              location one by one to deliver.
              <br /> <br /> Step 7: In Transaction screen, Rider can view the
              payment pending and previous payments.
              <br /> <br /> Step 8: In Support Centre screen, Rider can contact
              or chat with hub manager.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
