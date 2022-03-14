import React from "react";
import "../styles/components/BrandName.scss";
import logo from "../assets/logo.png";

function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      
     <img src={logo} alt="website logo"/>
    </div>
  );
}

export default BrandName;
