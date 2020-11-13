import React, { useEffect, useState } from "react";
import "./header.css";

const Header = ({ logo, title }) => {
  const [timer, setTimer] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );

  const startTimer = () => {
    setInterval(() => {
      setTimer(
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      );
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <div className="container-fluid header">
        <div>{logo}</div>
        <div>{title}</div>
        <div>{timer}</div>
      </div>
    </>
  );
};

export default Header;
