import React, { useEffect } from "react";
import "./Products.css";
import "./product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import { motion } from "motion/react";
import dark_arrow from '../../assets/dark-arrow.png'

import { useNavigate } from "react-router-dom";

const Projects = () => {

  
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projectData = [
    {
      location: "Dubai, UAE",
      title: "Abahoni Building",
      desc: "Delivering strong structures, smart design, quality materials, and long-lasting construction performance.",
      img: gallery_1,
    },
    {
      location: "Dhaka, Bangladesh",
      title: "MR Kholifa Tower",
      desc: "Symbolizing engineering excellence, innovation, luxury, and architectural ambition.",
      img: gallery_2,
    },
    {
      location: "Dubai, UAE",
      title: "Galoni Plan & Design",
      desc: "Efficient building concepts aligned with site conditions and client requirements.",
      img: gallery_3,
    },
    {
      location: "Dhaka, Bangladesh",
      title: "Hiclick Mirror Design",
      desc: "Stylish, functional mirror solutions that elevate space, light, and visual depth.",
      img: gallery_4,
    },
  ];

  return (
    <>
    {/* <button className="product_bt"
  onClick={() => navigate("/")}
  style={{
    padding: "8px 18px",
    fontSize: "13px",
    fontWeight: "400",
    backgroundColor: "#2a5298",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s"
  }}
>
  ← Back
      </button> */}
     <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay:0.7}} viewport={{once:true}} className='hero container'>
      <div className="hero-text">
        <h1>See Our Projects</h1>
        <p>We design your space with intelligent planning, modern aesthetics, and precise execution.</p>
        <button className='btn'onClick={() => navigate("/productsList")}>See Our Products <img src={dark_arrow} alt="" /></button>
      </div>
    </motion.div>

      {/* PROJECT SECTION */}
      <section className="projects-section" id="products">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>Project View</span>
            <h2>Our Latest Projects</h2>
            <div className="separator"></div>
          </div>

          <div className="project-grid">
            {projectData.map((project, index) => (
              <div
                className="project-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="project-img">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-content">
                  <span className="location">{project.location}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <button className="luxury-btn">View More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Fortune Faced. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Projects;
