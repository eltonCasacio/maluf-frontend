import React from "react";
import "./footer.css";

import ButtonsNavigation from "../ButtonsNavigation";

const Footer = ({ text }) => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <ButtonsNavigation />
      </div>

      <div className="row">{text}</div>
    </footer>
  );
};

export default Footer;
