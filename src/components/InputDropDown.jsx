import React, { useState } from "react";

const InputDropDown = ({ labelName, placeholder, type, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="w-full flex items-center mb-4">
      {/* Label */}
      <label
        htmlFor={type}
        className="text-sm font-medium whitespace-nowrap w-1/3"
      >
        {labelName} <sup className="text-xl text-red-700">&#8902;</sup>
      </label>

      {/* Input Field */}
      <div className="relative w-full">
        <input
          id={type}
          type="text"
          placeholder={placeholder}
          value={selectedOption}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          className="w-full h-12 border-2 outline-none rounded px-4 cursor-pointer"
        />

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white overflow-hidden">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDropDown;
