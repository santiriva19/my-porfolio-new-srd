import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <section className={classes["container"]}>
      <div className={classes["container_info"]}>
        <div
          className={classes["bubble_contact"]}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon color="white" icon={faLinkedin} />
        </div>
        {/* <div 
                className={classes["bubble_contact"]}
                onClick={()=> window.open("https://www.instagram.com/lotocode/?hl=es", "_blank",)}
                >
                    <FontAwesomeIcon color="white" icon={faInstagram} />
                </div> */}
        <div
          className={classes["bubble_contact"]}
          onClick={() =>
            window.open("https://github.com/santiriva19", "_blank")
          }
        >
          <FontAwesomeIcon color="white" icon={faGithub} />
        </div>
      </div>
      <div className={classes["container_rights"]}>
        <p>Designed and programed by Santiago Rivadeneira Delgado</p>
        <p>&#169; All rights reserved</p>
      </div>
    </section>
  );
}
