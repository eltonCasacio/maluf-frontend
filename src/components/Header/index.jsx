import React, { useState, useEffect } from "react";
import "./header.css";

const Header = ({ logo, title }) => {

  return (
    <>
      <div className="header">
        <span>{logo}</span>
        <span>{title}</span>
        <span>00:00:00</span>
      </div>
    </>
  );
};

export default Header;
