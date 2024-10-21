import React from "react";
import { Link } from "react-router-dom";

const ModuleBtnComponent = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex items-center gap-3 w-full flex-col bg-blue-500 rounded-lg p-3 text-white font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-95 hover:-translate-y-0.5"
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtnComponent;
