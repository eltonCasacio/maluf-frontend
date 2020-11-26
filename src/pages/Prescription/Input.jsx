import React from "react";

const Input = ({ id, label, rdOnly, cb, value }) => {
  return (
    <div>
      <label for={id}>{label}</label>
      <input
        readOnly={rdOnly}
        type="number"
        className="form-control"
        id={id}
        placeholder={value}
        onChange={(e) => cb(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
