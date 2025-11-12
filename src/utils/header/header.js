import React, { useState } from "react";
import classes from "./header.module.scss";
import Logo from "../../images/logos/logo-white.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useScrollEffect } from "../../hooks/useScrollEffect";

export default function Header({ setShowHamburguer, isScrolled, logoSize }) {
  const menuItems = [
    { id: "home", label: "Home", ariaLabel: "Navigate to Home section" },
    { id: "my-work", label: "My Work", ariaLabel: "Navigate to My Work section" },
    { id: "contact", label: "Contact", ariaLabel: "Navigate to Contact section" },
  ];

  const isMobile = useMediaQuery("(max-width: 745px)");
  const [activeSection, setActiveSection] = useState("home");

  useScrollEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id));
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
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <header 
      className={`${classes.container} ${isScrolled ? classes.scrolled : ''}`}
      role="banner"
    >
      <div className={classes.img_logo}>
        <img 
          src={Logo} 
          alt="Santiago Rivadeneira logo"
          className={`${classes.logo} ${logoSize === 'small' ? classes.logoSmall : ''}`}
          width="80"
          height="80"
        />
      </div>
      {isMobile ? (
        <button 
          className={classes["hm-button"]}
          onClick={() => setShowHamburguer(true)}
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <FontAwesomeIcon
            size="2x"
            icon={faBars}
            color="white"
            aria-hidden="true"
          />
        </button>
      ) : (
        <nav aria-label="Main navigation">
          <ul className={classes.navList}>
            {menuItems.map(({ id, label, ariaLabel }) => (
              <li key={id}>
                <button
                  className={`${classes.navButton} ${activeSection === id ? classes.active_white : ""}`}
                  onClick={() => scrollTo(id)}
                  onKeyPress={(e) => handleKeyPress(e, id)}
                  aria-label={ariaLabel}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
