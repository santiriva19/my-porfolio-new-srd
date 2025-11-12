import classes from "./section-work.module.scss";
import "../../../global.css";
import { faImages, faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

function SectionWork({ element, onChangingSliderImages }) {
  const isDesktop = useMediaQuery("(min-width: 601px)");

  const handleSliderImages = () => {
    onChangingSliderImages(element.id);
  };

  const handleVisitClick = () => {
    window.open(element.redirectTo, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const columnImgBrush = (direction) => {
    if (!isDesktop) return null;

    return (
      <div className={classes["col_picture"]}>
        <div
          data-speed="0.5"
          className={`${
            classes[direction === "right" ? "img_brush_1" : "img_brush_2"]
          } scroll-element js-scroll ${
            direction === "right" ? "fade-in-left" : "fade-in-right"
          }`}
          aria-hidden="true"
        >
          {element.images_description.map((image, indexImg) => {
            const speedParallax = 0.15 * indexImg + 0.3;
            return (
              <div
                key={indexImg}
                data-speed={`${speedParallax}`}
                className={`${
                  classes[
                    direction === "right"
                      ? "square_img_type_right_" + indexImg
                      : "square_img_type_left_" + indexImg
                  ]
                } ${classes["img_description"]} js-scroll layer`}
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={`${element.title} screenshot ${indexImg + 1}`}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const columnInfoWork = (direction) => {
    return (
      <div
        data-speed="0.5"
        className={`${classes["col_description"]} scroll-element js-scroll ${
          direction === "right" ? "fade-in-right" : "fade-in-left"
        }`}
      >
        <h2>{element.title}</h2>
        <div 
          className={classes["description_text"]}
          dangerouslySetInnerHTML={{ __html: element.description }}
        />
        <div
          className={`${classes["row_buttons"]} ${
            classes[direction === "right" ? "row_odd" : "row_even"]
          }`}
        >
          <button
            className={classes["button_redirect_white"]}
            onClick={handleVisitClick}
            onKeyPress={(e) => handleKeyPress(e, handleVisitClick)}
            aria-label={`Visit ${element.title} website in new tab`}
          >
            <FontAwesomeIcon
              icon={faMousePointer}
              className={classes["icon_button_white"]}
              size="2x"
              aria-hidden="true"
            />
            <span>Go visit</span>
          </button>
          <button
            className={classes["button_redirect_black"]}
            onClick={handleSliderImages}
            onKeyPress={(e) => handleKeyPress(e, handleSliderImages)}
            aria-label={`Open ${element.title} image gallery`}
          >
            <FontAwesomeIcon
              className={classes["icon_button_black"]}
              icon={faImages}
              size="2x"
              aria-hidden="true"
            />
            <span>Gallery</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <article 
      id={element.href} 
      className={`${classes["row"]} scroll-container`}
      aria-labelledby={`project-title-${element.id}`}
    >
      {element.direction !== "right"
        ? columnInfoWork(element.direction)
        : columnImgBrush(element.direction)}
      {element.direction !== "right"
        ? columnImgBrush(element.direction)
        : columnInfoWork(element.direction)}
    </article>
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
    onChangingSliderImages: (indexOfElement) =>
      dispatch({ type: "SET_SLIDER_IMAGES", payload: indexOfElement }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionWork);
