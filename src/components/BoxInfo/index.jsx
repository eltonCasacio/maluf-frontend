import React from "react";
import "./boxinfo.css";

import { alertMinMax } from "../../services/alarm";

const BoxInfo = ({ title, value, max, min, tolerancia }) => {
 
  return (
    <div className={`boxinfo bg-${alertMinMax(min, max, value, tolerancia)}`}>
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
