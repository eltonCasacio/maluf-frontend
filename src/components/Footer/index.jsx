import React from "react";
import "./footer.css";

import ButtonsNavigation from "../ButtonsNavigation";

const Footer = ({ text }) => {
  return (
    <div className="footer">
      <ButtonsNavigation />
      {text}
    </div>
  );
};

export default Footer;
