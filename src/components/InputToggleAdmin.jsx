import React from "react";

const InputToggleAdmin = ({ labelName, property, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(property, !checked);
  };

  return (
    <div className="w-full flex items-center justify-between py-1.5">
      <span className="text-sm font-medium whitespace-nowrap">{labelName}</span>
      <label htmlFor={property} className="w-12 h-6 grid place-items-center">
        <input
          type="checkbox"
          id={property}
          checked={checked}
          onChange={toggleCheckbox}
          className="appearance-none w-0 h-0 opacity-0"
        />
        <span className="block w-12 h-6 rounded-full bg-gray-300 relative">
          <span
            className={`block w-6 h-6 transition-all rounded-full bg-white absolute top-0 left-0 border-2 border-gray-300 
            ${checked ? "left-6" : ""}`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default InputToggleAdmin;
