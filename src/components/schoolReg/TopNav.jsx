import { BellAlertIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const TopNav = () => {
  return (
    <div className="w-full h-16 pb-4 border-b-2 flex justify-end items-center space-x-4">
      <div className="relative overflow-hidden rounded">
        <input
          type="text"
          name="search"
          className="w-[240px] h-10 border-2 outline-none rounded"
        />
        <MagnifyingGlassIcon className="w-10 h-full absolute top-0 right-0 p-2 border-2" />
      </div>
      <BellAlertIcon className="w-6 h-6" />
      <button className="px-4 py-1 rounded-full bg-gray-300 text-gray-700 font-medium">
        Admin
      </button>
    </div>
  );
};

export default TopNav;
