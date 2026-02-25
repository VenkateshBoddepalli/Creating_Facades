import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import white_arrow from '../../assets/white-arrow.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Logo */}
        <div className="footer-logo">
          Facades
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
          <button type='submit' className='btn dark-btn' >SUBSCRIBE <img src={white_arrow} alt="" /></button>
        </div>
      </div>

    <div className='footers'>
      <p>© 2024 Facade. All rights reserved.</p>
    </div>
    <div className='terPri'>
       <div>
        <div className="terms"><a href="#" target='_blank'>Terms of Services</a></div>
        <div className="privacy"><a href="#" target='_blank'>Privacy Policy</a></div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
