import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./TextFields.css"; // Import the CSS file

const SmallTextField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="small-text-field"
    />
  );
};

const MediumTextField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="medium-text-field"
    />
  );
};

const LargeTextField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="large-text-field"
    />
  );
};

const PasswordInput = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="password-input"
      />
      <span className="password-toggle" onClick={toggleShowPassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
};

const SelectTextField = ({ options, value, onChange, placeholder }) => {
  return (
    <select value={value} onChange={onChange} className="select-text-field">
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export {
  SmallTextField,
  MediumTextField,
  LargeTextField,
  PasswordInput,
  SelectTextField,
};
