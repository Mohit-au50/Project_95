import React from "react";

const Navbar = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "text-cyan-500" : "text-gray-500"
      } cursor-pointer border-0 outline-none font-medium tracking-wide py-0.5 whitespace-nowrap`}
    >
      {title}
    </button>
  );
};

export default Navbar;
