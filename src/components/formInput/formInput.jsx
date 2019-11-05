import React from "react";

import "./formInput.style.css";
const FormInput = props => {
  const { type, label, name, value, ...otherprops } = props;
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-input"
        autoComplete={name}
        name={name}
        {...otherprops}
      />
      <label
        htmlFor={name}
        className={`form-input-label ${value.length ? "shrink" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
