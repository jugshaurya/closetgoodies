import React from "react";

const FormInput = props => {
  const { type, label, value, ...otherprops } = props;
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-input"
        id={value}
        autoComplete={value}
        name={value}
        {...otherprops}
      />
      <label htmlFor={value} className="form-input-label">
        {label}
      </label>
    </div>
  );
};

export default FormInput;
