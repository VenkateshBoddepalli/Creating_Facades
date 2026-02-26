import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton } from "@mui/material";
import WhatAppButton from "../../Components/Whatsappicon/WhatsAppButton";
// import InstantNavIcon from "../../Components/InstantCall/InstantNavIcon";

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
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
             Facade Services
          </Link>
        </li>
        {/* 
        <li><Link to="glassfacade" smooth={true} offset={-260} duration={500}>Glass Facade</Link></li>
        <li><Link to="hplcladding" smooth={true} offset={-260} duration={500}>HPL Cladding</Link></li>
        <li><Link to="acpcladding" smooth={true} offset={-260} duration={500}>ACP Cladding</Link></li>
        <li><Link to="baffleceiling" smooth={true} offset={-260} duration={500}>Baffle Ceiling</Link></li>
         <li><Link to="facadedesigning" smooth={true} offset={-260} duration={500}>Facade Designing</Link></li> */}

        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            Facade Designs
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} offset={-260} duration={500}>
            Projects
          </Link>
        </li>
        <li>
           <RouterLink to="/products">Latest Launches</RouterLink>
        </li>
        <li>
          <RouterLink to="/productsList">Products</RouterLink>
        </li>
      </ul>

      {/* <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} style={{zIndex: 1500, }}/> */}

      <div className="right-icons">
        {/* <InstantNavIcon /> */}
        <WhatAppButton />

        <IconButton
          component="a"
          href={`tel:${phoneNumber}`}
          className="phone-btn"
        >
          <PhoneIcon />
        </IconButton>
   <Link
    to="contact"
    smooth={true}
    offset={-260}
    duration={500}
    className="nav-contact-btn"
  >
    Get In Touch
  </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
