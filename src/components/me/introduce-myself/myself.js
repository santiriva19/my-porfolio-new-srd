import { useEffect } from "react";
import classes from "./myself.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function IntroducingMS() {
  const buttonsSocial = [
    {
      index: 0,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/",
    },
    {
      index: 1,
      name: "Instagram",
      link: "https://www.instagram.com/lotocode/?hl=es",
    },
    {
      index: 2,
      name: "GitHub",
      link: "https://github.com/santiriva19",
    },
  ];
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
  return (
    <div className={classes["container"]}>
      <div data-speed="1" className={classes["img_bg_1"] + " layer"} />
      <div data-speed="2" className={classes["img_bg_2"] + " layer"} />
      <div data-speed="1.5" className={classes["img_bg_3"] + " layer"} />

      <div data-speed="1" className={`${classes["column_picture"]} layer`}>
        {/* <img className={classes["picture"]} src="https://i.ibb.co/XpVKGDZ/Imagen-7.png" alt="img" border="0"/> */}
        <img
          className={classes["picture"]}
          src="https://i.ibb.co/rfn45XZ/Imagen-2.png"
          alt="img"
          border="0"
        />
      </div>
      <div data-speed="0.8" className={classes["column_info"] + " layer"}>
        <h1>Santiago Rivadeneira</h1>
        <p className={classes["text_description_title"]}>
          Intermediate React Developer at Unosquare® || Master's student in
          Applied Analytics at Universidad de la Sabana || Informatics Engineer
          from Universidad de la Sabana
        </p>
        <br />
        <p className={classes["text_description"]}>Welcome to my portfolio!</p>
        <p className={classes["text_description"]}>
          Here you can take a look at my latest works &#128640;
        </p>
        <div className={classes["cont_buttons_social"]}>
          {buttonsSocial.map((element) => {
            return (
              <div
                className={classes["button_redirect"]}
                onClick={() => {
                  window.open(element.link, "_blank");
                }}
              >
                <FontAwesomeIcon
                  icon={
                    element.index === 0
                      ? faLinkedinIn
                      : element.index === 1
                      ? faInstagram
                      : faGithub
                  }
                  color={
                    element.index === 0
                      ? "rgb(55, 142, 255)"
                      : element.index === 1
                      ? "#ff33b4"
                      : "white"
                  }
                  className={classes["icons_social"]}
                />
                <p>{element.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IntroducingMS;
