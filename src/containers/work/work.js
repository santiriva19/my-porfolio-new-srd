import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Work from "../../components/work/work";
import classes from "./work.module.scss";
import { connect } from "react-redux";

function WorkComponent() {
  useEffect(() => {
    document.getElementById("bubble_back_top").style.cssText = "display: none";
  }, []);
  window.addEventListener("scroll", () => {
    onScrollFunction();
  });
  const onScrollFunction = () => {
    if (window.pageYOffset > 350) {
      document.getElementById("bubble_back_top").style.cssText =
        "display: flex !important;";
    } else {
      document.getElementById("bubble_back_top").style.cssText =
        "display: none;";
    }
  };
  return (
    <section id="my-work" className={classes["container"]}>
      <Work />
      <button
        id="bubble_back_top"
        className={classes["bubble_back_up"]}
        onClick={() => (window.location.href = "#home")}
      >
        <FontAwesomeIcon icon={faArrowUp} color="black" />
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
