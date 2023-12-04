import React from "react";

const InputField = ({ labelName, placeholder, type, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value); // Pass input value to parent
  };
  return (
    <div className="w-full flex items-center my-4">
      <label
        htmlFor={type}
        className="text-sm font-medium whitespace-nowrap w-1/3"
      >
        {labelName} <sup className="text-xl text-red-700">&#8902;</sup>
      </label>
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full h-12 border-2 outline-none rounded px-4"
      />
    </div>
  );
};

export default InputField;
