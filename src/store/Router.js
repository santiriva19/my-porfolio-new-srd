import React, { useEffect, useState, useRef } from "react";
import MeComponent from "../containers/me/me";
import classes from "./Router.module.scss";
import Header from "../utils/header/header";
import "../global.css";
import WorkComponent from "../containers/work/work";
import Footer from "../utils/footer/footer";
import Slider from "../components/work/slider-images/slider-image";
import { connect } from "react-redux";
import ContactPage from "../containers/contact/contact";
import { slide as Menu } from "react-burger-menu";
import { useParallax } from "../hooks/useParallax";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useFocusTrap } from "../hooks/useFocusTrap";

function App(props) {
  const [showHamburguer, setShowHamburguer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState('large');
  const sliderRef = useRef(null);

  useParallax();
  
  useScrollEffect(() => {
    const scrollPosition = window.pageYOffset;
    const shouldBeScrolled = scrollPosition > 80;
    
    setIsScrolled(shouldBeScrolled);
    setLogoSize(shouldBeScrolled ? 'small' : 'large');
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (props.showModalWork) {
          props.onModalShowFalse();
        }
        if (showHamburguer) {
          setShowHamburguer(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props, showHamburguer]);

  useFocusTrap(props.showModalWork, sliderRef);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowHamburguer(false);
    }
  };

  const handleKeyPress = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <div className={classes["container"]}>
      <div 
        data-speed="2" 
        className={`${classes["bg_1"]} layer`} 
        aria-hidden="true"
      />
      <div 
        data-speed="1" 
        className={`${classes["bg_2"]} layer`}
        aria-hidden="true"
      />

      {props.showModalWork && props.sliderImages && (
        <div 
          ref={sliderRef}
          className={classes["container_slider"]}
          role="dialog"
          aria-modal="true"
          aria-labelledby="slider-title"
        >
          <div className={classes["container_button_esc"]}>
            <button
              className={classes["button_escape"]}
              onClick={() => props.onModalShowFalse()}
              aria-label="Close image gallery (press Escape)"
            >
              <span aria-hidden="true">X</span>
            </button>
            <span className={classes["esc_label"]} aria-hidden="true">ESC</span>
          </div>
          <Slider 
            heading="Project Image Gallery" 
            slides={props.sliderImages}
            id="slider-title"
          />
        </div>
      )}

      {showHamburguer && (
        <Menu 
          onClose={() => setShowHamburguer(false)} 
          isOpen={showHamburguer}
          aria-label="Mobile navigation menu"
        >
          <button
            onClick={() => setShowHamburguer(false)}
            className={classes["close-ham-menu"]}
            aria-label="Close menu"
          >
            <span aria-hidden="true">X</span>
          </button>
          <nav role="navigation">
            <button
              className="menu-item"
              onClick={() => scrollToSection('home')}
              onKeyPress={(e) => handleKeyPress(e, 'home')}
            >
              Home
            </button>
            <button
              className="menu-item"
              onClick={() => scrollToSection('my-work')}
              onKeyPress={(e) => handleKeyPress(e, 'my-work')}
            >
              My work
            </button>
            <button
              className="menu-item"
              onClick={() => scrollToSection('contact')}
              onKeyPress={(e) => handleKeyPress(e, 'contact')}
            >
              Contact
            </button>
          </nav>
        </Menu>
      )}

      <Header 
        setShowHamburguer={setShowHamburguer}
        isScrolled={isScrolled}
        logoSize={logoSize}
      />

      <main id="main-content">
        <MeComponent />
        <WorkComponent />
        <ContactPage />
      </main>
      
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModalWork: state.showModalWork,
    sliderImages: state.sliderImages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalShowTrue: () => dispatch({ type: "MODAL_IMAGES_TRUE" }),
    onModalShowFalse: () => dispatch({ type: "MODAL_IMAGES_FALSE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
