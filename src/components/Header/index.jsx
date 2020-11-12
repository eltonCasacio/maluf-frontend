import React from "react";
import "./header.css";

const Header = ({ logo, title }) => {
  return (
    <>
      <div className="container-fluid header">
        <div>{logo}</div>
        <div>{title}</div>
        <div>00:00:00</div>
      </div>
    </>
  );
};

export default Header;
