import React from "react";
import "./formButton.style.css";

const FormButton = props => {
  const { type, children, googleButton, ...otherprops } = props;
  return (
    <button
      className={`form-button ${googleButton ? "google-button" : ""}`}
      type={type}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default FormButton;
