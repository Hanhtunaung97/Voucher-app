import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const BreadCrumbComponent = ({ currentPageTitle, links }) => {
  const nav = useNavigate();
  const handleBackBtn = () => {
    nav(-1);
  };
  const handleNextBtn = () => {
    nav(1);
  };
  return (
    <div className="flex  justify-between items-center w-full mb-5 print:hidden drop-shadow-sm border-b border-b-blue-50 py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard"
              className="inline-flex gap-2  items-center text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
            >
              <FaHome className="text-slate-700 w-4 h-4" />
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li key={index} aria-current="page">
                <div className="flex items-center">
                  <PiGreaterThan className="text-slate-400  w-4 h-4" />
                  <Link
                    to={link.path}
                    className="inline-flex gap-2  items-center text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </div>
              </li>
            ))}
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
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={handleBackBtn}
          className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200 rounded-s-lg hover:bg-blue-100 hover:border-blue-100 hover:text-blue-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <LuChevronLeft />
        </button>
        <button
          type="button"
          onClick={handleNextBtn}
          className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200 rounded-e-lg hover:bg-blue-100 hover:border-blue-100 hover:text-blue-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BreadCrumbComponent;
