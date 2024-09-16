import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
const BreadCrumbComponent = ({ currentPageTitle, links }) => {
  return (
    <div className="flex gap-3 w-full mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-2  items-center text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
            >
              <FaHome className="text-slate-700 w-4 h-4" />
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <PiGreaterThan className="text-slate-400  w-4 h-4" />
              <span className="ms-1 text-sm font-semibold text-slate-800 md:ms-2 dark:text-slate-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbComponent;
