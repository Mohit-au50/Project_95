import React, { useState } from "react";

const InputToggle = ({ labelName, type, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue); // Pass checkbox value to parent
  };

  return (
    <div className="w-full flex items-center">
      <span className="text-sm font-medium whitespace-nowrap w-1/4">
        {labelName} <sup className="text-xl text-red-700">&#8902;</sup>
      </span>
      <label htmlFor="toggle" className="w-12 h-6 grid place-items-center">
        <input
          type={type}
          id="toggle"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="appearance-none w-0 h-0 opacity-0"
        />
        <span className="block w-12 h-6 rounded-full bg-gray-300 relative">
          <span
            className={`block w-6 h-6 transition-all rounded-full bg-white absolute top-0 left-0 border-2 border-gray-300 
            ${isChecked ? "left-6" : ""}`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default InputToggle;
