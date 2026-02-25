import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { motion } from 'motion/react'
import { Navigate, useNavigate } from 'react-router-dom'
import MaterialsAccordion from "../../Components/Materials/MaterialsAccordion"

const Hero = () => {

  const navigate = useNavigate();
  return (
    <>
    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay:0.7}} viewport={{once:true}} className='hero container'>
      <div className="hero-text">
        <h1>We DESIGN YOUR SPACE</h1>
        <p>We design your space with intelligent planning, modern aesthetics, and precise execution.</p>
        <button className='btn' onClick={() => navigate("/products")}>See Our Projects <img src={dark_arrow} alt="" /></button>
      </div>
    </motion.div>

      <div className="hero-filter">
        <MaterialsAccordion />
      </div>
      
      </>
  )
}

export default Hero
