import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SmallTextField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100px",
        height: "25px",
        backgroundColor: "#EEEEEE",
        borderRadius: "5px",
        border: "0",
      }}
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
      style={{
        width: "200px",
        height: "25px",
        backgroundColor: "#EEEEEE",
        borderRadius: "5px",
        border: "0",
        padding: 5,
      }}
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
      style={{
        width: "400px",
        height: "20px",
        backgroundColor: "#EEEEEE",
        borderRadius: "10px",
        border: "0",
        padding: 10,
      }}
    />
  );
};

const PasswordInput = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "400px",
          height: "20px",
          backgroundColor: "#EEEEEE",
          borderRadius: "10px",
          border: "0",
          padding: 10,
          marginBottom: "10px",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={toggleShowPassword}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
};

const SelectTextField = ({ options, value, onChange, placeholder }) => {
  return (
    <select value={value} onChange={onChange} style={{ width: "200px" }}>
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
