import { useEffect } from "react";
import classes from "./myself.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const buttonsSocial = [
  {
    id: 0,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/",
    icon: faLinkedinIn,
    color: "rgb(55, 142, 255)",
    isExternal: true,
  },
  {
    id: 2,
    name: "Download CV",
    link: "/CV_Santiago_Rivadeneira.pdf",
    icon: faDownload,
    color: "white",
    isDownload: true,
  },
];

function IntroducingMS() {
  /*── Parallax respetando “prefers-reduced-motion” ───────────────*/
  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduce) return;

    const parallax = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = Number(layer.getAttribute("data-speed")) || 1;
        const x = (window.innerHeight - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener("mousemove", parallax);

    /* Limpieza del listener en des-montaje */
    return () => window.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={classes["container"]} role="region" aria-labelledby="name">
      {/* Capas decorativas */}
      <div
        aria-hidden="true"
        data-speed="1"
        className={classes["img_bg_1"] + " layer"}
      />
      <div
        aria-hidden="true"
        data-speed="2"
        className={classes["img_bg_2"] + " layer"}
      />
      <div
        aria-hidden="true"
        data-speed="1.5"
        className={classes["img_bg_3"] + " layer"}
      />

      {/* Fotografía */}
      <div
        aria-hidden="true"
        data-speed="1"
        className={`${classes["column_picture"]} layer`}
      >
        <img
          className={classes["picture"]}
          src="https://i.ibb.co/rfn45XZ/Imagen-2.png"
          alt="Retrato de Santiago Rivadeneira"
        />
      </div>

      {/* Información principal */}
      <div data-speed="0.8" className={classes["column_info"] + " layer"}>
        <h1 id="name">Santiago Rivadeneira</h1>

        <p className={classes["text_description_title"]}>
          Informatics Engineer | Software Developer | Professor at Universidad
          de La Sabana | Master’s student in Applied Analytics
        </p>

        <p className={classes["text_description"]}>Welcome to my portfolio!</p>
        <p className={classes["text_description"]}>
          Here you can take a look at my latest projects 🚀
        </p>

        {/* Botones sociales y CV */}
        <nav className={classes["nav_social"]} aria-label="Social profiles and CV">
          <ul className={classes["cont_buttons_social"]}>
            {buttonsSocial.map(({ id, name, link, icon, color, isDownload, isExternal }) => (
              <li key={id}>
                <a
                  href={link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  download={isDownload ? "CV_Santiago_Rivadeneira.pdf" : undefined}
                  className={classes["button_redirect"]}
                  style={{
                    border: `3px solid ${color}`,
                  }}
                  aria-label={isDownload ? `Download ${name}` : `Open ${name} profile in new tab`}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    color={color}
                    className={classes["icons_social"]}
                    aria-hidden="true"
                  />
                  <p style={{ color: `${color}` }}>{name}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default IntroducingMS;
