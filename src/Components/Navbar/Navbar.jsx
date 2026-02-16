import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { motion } from "motion/react"

import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material'; 


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    const phoneNumber = "+919177370914";

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <motion.nav initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, ease:"easeOut"}} className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        {/* <li><Link to="products" smooth={true} offset={-260} duration={500}>Products</Link></li> */}
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='project' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='blog' smooth={true} offset={-260} duration={500}>Blog</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Get In Touch</Link></li>
      </ul>

      <IconButton
        component="a"
        href={`tel:${phoneNumber}`}
        style={{
          backgroundColor: "#fff",
          color: "#3c09f3",
          padding: "10px",
          borderRadius: "50%",
          // marginLeft:"-170px"
         }}
      >
         <PhoneIcon style={{ fontSize: "22px" }} />
      </IconButton>

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </motion.nav>
  )
}

export default Navbar
