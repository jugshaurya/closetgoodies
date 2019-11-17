import React from "react";
// Style Import
import "./formButton.styles.css";

const FormButton = props => {
  const { type, children, googleButton, addToCart, ...otherprops } = props;
  return (
    <button
      className={`form-button 
        ${googleButton ? "google-button" : ""}
        ${addToCart ? "addtocart-button" : ""} `}
      type={type}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default FormButton;
