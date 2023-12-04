import React from "react";
import { Link } from "react-router-dom";
import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const Links = [
    {
      linkPath: "/dashboard",
      linkName: "Dashboard",
    },
    {
      linkPath: "/masters",
      linkName: "Masters",
    },
    {
      linkPath: "/organization",
      linkName: "Organization",
    },
    {
      linkPath: "/academicSession",
      linkName: "Academic Session",
    },
    {
      linkPath: "/schoolRegistration",
      linkName: "School Registration",
    },
    {
      linkPath: "/users",
      linkName: "Users",
    },
  ];
  return (
    <div className="max-w-fit w-full h-auto flex bg-cyan-500 text-white pr-7">
      <div className="h-full p-4 py-8 space-y-4">
        <UserCircleIcon className="w-7 h-7" />
        <Squares2X2Icon className="w-7 h-7" />
      </div>
      <div className="w-full h-full p-4">
        <div className="py-2.5 border-b-2 mb-4">
          <h1 className="text-2xl font-bold tracking-wide mb-2">Vidyamate</h1>
          <p>Super admin</p>
        </div>
        <ul>
          {Links.map((link, index) => (
            <li key={index} className="font-medium tracking-wide py-1">
              <Link to={link.linkPath}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
