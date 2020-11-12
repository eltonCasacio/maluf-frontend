import React from "react";
import "./boxinfo.css";

const BoxInfo = ({ title, value, max, min }) => {
  return (
    <div className="boxinfo">
      <div className="value-info">
        <div htmlFor={title}>{title}</div>
        <div>{value}</div>
      </div>

      <div className="min-max">
        <div>
          {" "}
          <span>MAX</span>
          <span>{max}</span>
        </div>
        <div>
          {" "}
          <span>MIN</span>
          <span>{min}</span>
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
