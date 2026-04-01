import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import logotext from "../../assets/logotext.png"
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton } from "@mui/material";
import WhatAppButton from "../../Components/Whatsappicon/WhatsAppButton";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const phoneNumber = "+917777007360";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`container ${sticky ? "dark-nav" : ""}`}
    >
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
        style={{ zIndex: 1500 }}
      />
      {/* <img src={logo} alt="" className="logo" /> */}
      <RouterLink to="/">
      <img src={logo} alt="logo" className="logo" />
      </RouterLink>
      <div className="cftext">Creative Facades</div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {/* <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link> */}
          <RouterLink to="/#about">About US</RouterLink>
        </li>
        <li>
          {/* <Link to="services" smooth={true} offset={-260} duration={500}>
             Facade Services
          </Link> */}
          <RouterLink to="/#services">Services</RouterLink>
        </li>
        <li>
          {/* <Link to="about" smooth={true} offset={-150} duration={500}>
            Facade Designs
          </Link> */}
          <RouterLink to="/#about">Designning & Engg</RouterLink>
        </li>
        <li>
          {/* <Link to="project" smooth={true} offset={-260} duration={500}>
            Projects
          </Link> */}
          <RouterLink to="/#project">Projects</RouterLink>
        </li>
        <li>
           <RouterLink to="/products">Latest Launches</RouterLink>
        </li>
        <li>
          <RouterLink to="/productsList">Products</RouterLink>
        </li>
      </ul>
      <div className="right-icons">
        <WhatAppButton />
        <IconButton
          component="a"
          href={`tel:${phoneNumber}`}
          className="phone-btn"
        >
          <PhoneIcon />
        </IconButton>
   {/* <Link
    to="contact"
    smooth={true}
    offset={-180}
    duration={500}
    className="nav-contact-btn"
  >
    Get In Touch
  </Link> */}
  <RouterLink to="/#contact" className="nav-contact-btn">Get In Touch</RouterLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
