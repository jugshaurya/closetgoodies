import React from "react";

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
