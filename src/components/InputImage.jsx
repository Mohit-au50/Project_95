import React from "react";

const InputImage = ({ labelName, placeholder, type, onChange }) => {
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the first selected file
    onChange(selectedFile); // Pass selected file to parent
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
        onChange={handleImageChange}
        className="w-full h-12 border-0 outline-none rounded px-4"
      />
    </div>
  );
};

export default InputImage;
