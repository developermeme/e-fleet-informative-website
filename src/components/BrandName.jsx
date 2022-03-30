import React from "react";
import "../styles/components/BrandName.scss";
import logo from "../assets/logo.png";

function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <a href="https://admin.efleet.world/">
        <img src={logo} alt="website logo" />
      </a>
    </div>
  );
}

export default BrandName;
