import React from "react";
// Style Import
import "./formInput.styles.css";
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
