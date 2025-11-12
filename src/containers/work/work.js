import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Work from "../../components/work/work";
import classes from "./work.module.scss";
import { connect } from "react-redux";
import { useScrollEffect } from "../../hooks/useScrollEffect";

function WorkComponent() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useScrollEffect(() => {
    const scrollPosition = window.pageYOffset;
    setShowBackToTop(scrollPosition > 350);
  }, []);

  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <section id="my-work" className={classes["container"]}>
      <Work />
      <button
        className={`${classes["bubble_back_up"]} ${showBackToTop ? classes["visible"] : classes["hidden"]}`}
        onClick={scrollToTop}
        onKeyPress={handleKeyPress}
        aria-label="Scroll back to top of page"
      >
        <FontAwesomeIcon icon={faArrowUp} color="black" aria-hidden="true" />
      </button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    showModalWork: state.showModalWork,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalShowTrue: () => dispatch({ type: "MODAL_IMAGES_TRUE" }),
    onModalShowFalse: () => dispatch({ type: "MODAL_IMAGES_FALSE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkComponent);
