import React from "react";
import "./footer.css";

import ButtonsNavigation from "../ButtonsNavigation";

const Footer = ({ text }) => {
  return (
    <footer>
      <div className="footer-buttons">
        <ButtonsNavigation />
      </div>

      <div className="row">{text}</div>
    </footer>
  );
};

export default Footer;
