import React, { useEffect, useState } from "react";
import "./header.css";

const Header = ({ logo, title }) => {
  const [timer, setTimer] = useState(new Date().toLocaleString("pt-br"));

  const startTimer = () => {
    setInterval(() => {
      setTimer(new Date().toLocaleString("pt-br"));
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <div className="container-fluid header">
        <div className="col-4 text-left">{logo}</div>
        <div className="col-4">{title}</div>
        <div className="col-4 text-right">{timer}</div>
      </div>
    </>
  );
};

export default Header;
