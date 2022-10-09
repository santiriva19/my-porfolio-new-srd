import classes from "./header.module.scss";
import Logo from "../../images/logos/logo-white.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function Header({ setShowHamburguer }) {
  const [showButtonHam, setshowButtonHam] = useState(false);
  useEffect(() => {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        setshowButtonHam(true);
      } else {
        setshowButtonHam(false);
      }
    }

    var x = window.matchMedia("(max-width: 745px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  });
  return (
    <div id="my_header" className={classes["container"]}>
      <div className={classes["img_logo"]}>
        <img id="my_logo" src={Logo} alt="logo" />
      </div>
      {showButtonHam ? (
        <FontAwesomeIcon
          onClick={() => setShowHamburguer(true)}
          size="2x"
          icon={faBars}
          color="white"
        />
      ) : (
        <nav id="my_nav">
          <p
            className={
              window.location.pathname === "/home" ||
              window.location.pathname === "/"
                ? classes["active_white"]
                : ""
            }
            onClick={() => (window.location.href = "/home")}
          >
            Home
          </p>
          <p
            className={
              window.location.pathname === "/my-work"
                ? classes["active_white"]
                : ""
            }
            onClick={() => (window.location.href = "/my-work")}
          >
            My Work
          </p>
          <p
            className={
              window.location.pathname === "/contact"
                ? classes["active_white"]
                : ""
            }
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </p>
        </nav>
      )}
    </div>
  );
}
