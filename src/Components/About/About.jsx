import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <h1>25</h1>
        <span>Years of Experience</span>
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Architechtural plan design and build</h2>
        <p>We provide integrated architecture planning, design, and build services that transform concepts into functional, visually striking spaces. Our approach combines creative design thinking with practical engineering to ensure every project meets aesthetic, structural, and budget requirements.</p>
        <p>The company delivers durable, innovative cladding solutions tailored for India's construction market, emphasizing quality and customization.</p>
        <p>Creative Facade Solutions specializes in premium HPL, ACP, louvers, and glass products for modern building facades. </p>
        <ul className="about_list">
            <li>Design Planning </li>
            <li>Design & Build Execution. </li>
          </ul>
      </div>
    </div>
  )
}

export default About
