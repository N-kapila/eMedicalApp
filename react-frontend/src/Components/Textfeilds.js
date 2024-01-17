import React from "react";

const SmallTextField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: "100px" }}
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
      style={{ width: "200px" }}
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
      style={{ width: "300px" }}
    />
  );
};

const SelectTextField = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled hidden>
        Select your choice
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { SmallTextField, MediumTextField, LargeTextField, SelectTextField };
