import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Products from "./Components/Projects/Products";
import ProductList from "./Components/Projects/ProductList";
import ScrollToTop from "./scrollToTop";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showMobileForm, setShowMobileForm] = useState(false);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Navbar />
              <Hero />
              <div className="container">
                <Title
                  subTitle="Our Services"
                  title="Make Your Dream With Us"
                />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Projects" title="Our Latest Projects" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Designer Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>

              {/* Sticky Mobile Button */}
              <button
                className="sticky-btn"
                onClick={() => setShowMobileForm(true)}
              >
                Get in touch
              </button>

              {showMobileForm && (
                <div className="mobile-form-overlay">
                  <div className="mobile-form-container">
                    <button
                      className="close-btn"
                      onClick={() => setShowMobileForm(false)}
                    >
                      ✖
                    </button>
                    <Contact  closeModal={() => setShowMobileForm(false)}/>
                  </div>
                </div>
              )}

              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />
        <Route path="/productsList" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
