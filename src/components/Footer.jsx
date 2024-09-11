import React from "react";
import logo from "../assets/images/logo.svg";
import fb from "../assets/images/icon-facebook.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import ig from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={logo} alt="" />
        <div className="left-link">
          <a href="">About</a>
          <a href="">Career</a>
          <a href="">Events</a>
          <a href="">Products</a>
          <a href="">Support</a>
        </div>
      </div>
      <div className="right-footer">
        <div className="social-logo">
          <img src={fb} alt="" />
          <img src={tw} alt="" />
          <img src={pt} alt="" />
          <img src={ig} alt="" />
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default Footer;
