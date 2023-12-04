import React, { useState } from "react";
import Navbar from "../components/schoolReg/Navbar";
import BasicInfo from "../components/schoolReg/BasicInfo";
import FeesHeads from "../components/schoolReg/FeesHeads";
import ClassesSections from "../components/schoolReg/ClassesSections";
import FeesStructure from "../components/schoolReg/FeesStructure";
import TopNav from "../components/schoolReg/TopNav";

const SchoolRegistration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleRoomClick = (index) => {
    setActiveIndex(index);
  };

  const Links = [
    "Basic Info",
    "Fees Heads",
    "Classes Sections",
    "Fees Structure",
  ];

  return (
    <div className="w-full h-full">
      <TopNav />
      <div className="w-full h-12 flex items-center justify-between mb-4">
        <div>
          <h1 className="font-medium">SchoolRegistration</h1>
          <p className="text-cyan-500 text-xs">
            SCHOOL LIST{" "}
            <span className="text-gray-300">/ AB NEW ENGLISH HIGH SCHOOL</span>
          </p>
        </div>
        <button className="border-0 outline-none text-cyan-500">
          Update School
        </button>
      </div>
      <div className="flex items-start space-x-4 w-full">
        <div className="flex flex-col items-start border w-fit p-7 rounded-lg">
          {Links.map((link, index) => (
            <Navbar
              key={index}
              title={link}
              isActive={activeIndex === index}
              onClick={() => handleRoomClick(index)}
            />
          ))}
        </div>
        {activeIndex === 0 && <BasicInfo />}
        {activeIndex === 1 && <FeesHeads />}
        {activeIndex === 2 && <ClassesSections />}
        {activeIndex === 3 && <FeesStructure />}
      </div>
    </div>
  );
};

export default SchoolRegistration;
