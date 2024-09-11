import React from "react";
import Logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <div className="header">
   <div className="opacity">
   <div className="nav">
        <div className="left-nav">
          <img src={Logo} alt="" />
        </div>
        <div className="right-nav">
          <a href="">About</a>
          <a href="">Career</a>
          <a href="">Events</a>
          <a href="">Products</a>
          <a href="">Support</a>
        </div>
      </div>
      <div className="title-box">
        <h1 className="title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
   </div>
    </div>
  );
};

export default Header;
