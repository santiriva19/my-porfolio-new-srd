import React, { useEffect, useState } from "react";
import MeComponent from "../containers/me/me";
import classes from "./Router.module.scss";
import Header from "../utils/header/header";
import { Routes, Route } from "react-router-dom";
import "../global.css";
import WorkComponent from "../containers/work/work";
import Footer from "../utils/footer/footer";
import Slider from "../components/work/slider-images/slider-image";
import { connect } from "react-redux";
import ContactPage from "../containers/contact/contact";
import { slide as Menu } from "react-burger-menu";

function App(props) {
  const [showHamburguer, setShowHamburguer] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      onScrollFunction();
    };
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        props.onModalShowFalse();
      }
    });
  }, [props]);
  useEffect(() => {
    window.addEventListener("mousemove", parallax);
  }, []);
  const parallax = (e) => {
    document.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerHeight - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  const onScrollFunction = () => {
    if (window.pageYOffset > 80) {
      document.getElementById("my_header").style.cssText =
        " animation: scale_header_in 0.5s ease; height: 60px; background-color: rgba(52, 52, 52, 0.77); border: none;";
      document.getElementById("my_logo").style.cssText = " width: 3%;";
    } else {
      document.getElementById("my_header").style.cssText =
        "animation: scale_header_out 0.5s ease; height: 100px; background-color: transparent; border: 1px solid white; ";
      document.getElementById("my_logo").style.cssText = " width: 6%;";
    }
  };
  const renderWorkBackground = () => {
    if (
      window.location.pathname === "/my-work" ||
      window.location.pathname === "/contact"
    ) {
      return (
        <>
          <div data-speed="2" className={classes["bg_1"] + " layer"} />
          <div data-speed="1" className={classes["bg_2"] + " layer"} />
        </>
      );
    }
  };
  const renderSliderComponent = () => {
    if (props.showModalWork) {
      return (
        <div className={classes["container_slider"]}>
          <div className={classes["container_button_esc"]}>
            <input
              id="esc_button_id"
              type="button"
              value="X"
              className={classes["button_escape"]}
              onClick={() => props.onModalShowFalse()}
            />
            <label> ESC </label>
          </div>
          <Slider heading="Slider Of Images" slides={props.sliderImages} />
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div id="my_app" className={classes["container"]}>
      {renderWorkBackground()}
      {props.sliderImages && renderSliderComponent()}
      {showHamburguer && (
        <Menu onClose={() => setShowHamburguer(false)} isOpen={showHamburguer}>
          <input
            type="button"
            value="X"
            onClick={() => setShowHamburguer(false)}
            className={classes["close-ham-menu"]}
          />
          <a id="home" className="menu-item" href="/home">
            Home
          </a>
          <a id="about" className="menu-item" href="/my-work">
            My work
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      )}

      <Header setShowHamburguer={setShowHamburguer} />
      {/* <Routes>
        <Route exact path="/" element={<MeComponent />} />
        <Route exact path="/home" element={<MeComponent />} />
        <Route exact path="/my-work" element={<WorkComponent />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes> */}

      <MeComponent />
      <WorkComponent />
      <ContactPage />
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
