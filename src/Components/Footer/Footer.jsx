import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import white_arrow from "../../assets/white-arrow.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Creative Facades Logo"  className="footerimg"/>
          <p className="creative">CREATIVE</p>
          <p className="facades">FACADES</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <input type="email" placeholder="Enter email" />
          <button type="submit" className="btn dark-btn">
            SUBSCRIBE <img src={white_arrow} alt="arrow" />
          </button>
        </div>

      </div>

      <div className="footers">
        <p>© 2026 Creative Facades. All rights reserved.</p>
      </div>

      {/* <div className="terPri">
        <div className="terms">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms of Services
          </a>
        </div>
        <div className="privacy">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </div> */}

    </footer>
  );
};

export default Footer;
