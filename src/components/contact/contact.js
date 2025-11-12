import React from "react";
import CardComponent from "./card/card";
import classes from "./contact.module.scss";

const ContactComponent = () => {
  return (
    <div className={classes["container"]}>
      <CardComponent />
    </div>
  );
};

export default ContactComponent;
