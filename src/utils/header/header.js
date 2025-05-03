import React, { useState, useEffect } from "react";
import classes from "./header.module.scss";
import Logo from "../../images/logos/logo-white.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ setShowHamburguer }) {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "my-work", label: "My Work" },
    { id: "contact", label: "Contact" },
  ];

  const [showButtonHam, setShowButtonHam] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // media query para hamburguesa
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 745px)");
    const onMq = (e) => setShowButtonHam(e.matches);
    mq.addListener(onMq);
    onMq(mq);
    return () => mq.removeListener(onMq);
  }, []);

  // listener de scroll para detectar sección activa
  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id));

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let sec of sections) {
        if (!sec) continue;
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // marca al cargar
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="my_header" className={classes.container}>
      <div className={classes.img_logo}>
        <img id="my_logo" src={Logo} alt="logo" />
      </div>
      {showButtonHam ? (
        <button className={classes["hm-button"]}>
          <FontAwesomeIcon
            onClick={() => setShowHamburguer(true)}
            size="2x"
            icon={faBars}
            color="white"
          />
        </button>
      ) : (
        <nav id="my_nav">
          {menuItems.map(({ id, label }) => (
            <p
              key={id}
              className={activeSection === id ? classes.active_white : ""}
              onClick={() => scrollTo(id)}
            >
              {label}
            </p>
          ))}
        </nav>
      )}
    </div>
  );
}
