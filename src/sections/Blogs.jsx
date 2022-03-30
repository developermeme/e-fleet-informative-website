import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import rider1 from "../assets/rider1.jpg";
import rider2 from "../assets/rider2.jpg";
import rider3 from "../assets/rider3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          {/* <Title title="Blogs" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p> */}
        </motion.div>
        <div className="blogs">
          <Blog
            image={rider1}
            // title="What you need to consider when building your e-bike fleet"
            // subTitle="If you’re in the delivery business and are considering why you might want to transition your fleet of vehicles to EVs - or in particular e-bikes - then there is a really good reason for doing it: you can save money on each delivery and increase your profits.

            // We said it was a really good reason.

            // You’re thinking: Yeah, but there has to be a catch..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={rider2}
            // title="Not all e-bikes are the same"
            // subTitle="Not least will be which e-bike to buy. Many fleet managers new to the genre don’t realise that ebikes really are built for purpose - an e-bike is not just an e-bike. The difference between an e-bike suitable for food deliveries and an e-bike designed purely for leisure is at least as marked as that between a racing bike and a mountain bike, if not more... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={rider3}
            // title="First up: Are they a fad? Answer: No. Next?"
            // subTitle="At the moment electric vehicles make up 4% of car sales, by 2030 Toyota expect that to be 85%. In the US, transport makes up 29% of all carbon emissions - the biggest single contributor. In the EU it’s 27%. Government support - or conversely, regulations - will be..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        {/* <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="View All" />
        </div> */}
      </div>
    </div>
  );
}

export default Blogs;
