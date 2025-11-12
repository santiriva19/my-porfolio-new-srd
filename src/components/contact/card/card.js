import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../global.css";
import classes from "./card.module.scss";

const CardComponent = () => {
  const dataContact = [
    {
      name: "Email",
      value: "santiriva19@gmail.com",
      type: "email",
      href: "mailto:santiriva19@gmail.com"
    },
    {
      name: "LinkedIn",
      value: "View Profile",
      type: "link",
      href: "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/?locale=en_US"
    },
    {
      name: "Phone number",
      value: "(+57) 300-3805184",
      type: "phone",
      href: "tel:+573003805184"
    },
  ];

  const renderContactValue = (item) => {
    if (item.type === "link") {
      return (
        <a 
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes["contact_link"]}
          aria-label={`Open ${item.name} profile in new tab`}
        >
          {item.value}
        </a>
      );
    } else if (item.type === "email" || item.type === "phone") {
      return (
        <a 
          href={item.href}
          className={classes["contact_link"]}
          aria-label={`${item.type === "email" ? "Send email to" : "Call"} ${item.value}`}
        >
          {item.value}
        </a>
      );
    }
    return <span>{item.value}</span>;
  };

  return (
    <section
      className={classes["container"]}
      aria-labelledby="contact-title"
    >
      <h1 id="contact-title">Let's get in touch!</h1>
      <div className={classes["content_wrapper"]}>
        <div className={classes["container_img"]}>
          <img
            src="https://i.ibb.co/rfn45XZ/Imagen-2.png"
            alt="Santiago Rivadeneira portrait"
            loading="lazy"
            width="200"
            height="200"
          />
        </div>
        <div className={classes["info_card"]}>
          {dataContact.map((element, index) => (
            <div key={index} className={classes["row_info"]}>
              <span className={classes["title"]}>{element.name}:</span>
              {renderContactValue(element)}
            </div>
          ))}
        </div>
      </div>
      <div className={classes["container_button"]}>
        <a
          href="/CV_Santiago_Rivadeneira.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className={classes["button_redirect_white"]}
          aria-label="Download Santiago Rivadeneira's CV as PDF"
        >
          <FontAwesomeIcon
            icon={faMousePointer}
            className={classes["icon_button_white"]}
            size="2x"
            aria-hidden="true"
          />
          <span>Download my CV</span>
        </a>
      </div>
    </section>
  );
};

export default CardComponent;
