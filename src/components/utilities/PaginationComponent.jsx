import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const PaginationComponent = ({
  links: { prev, next },
  meta: { from, to, total, links },
  RefetchUrl,
}) => {
  const handlePrevBtn = () => {
    RefetchUrl(prev);
  };

  const handleNextBtn = () => {
    RefetchUrl(next);
  };
  return (
    <div className="flex justify-between items-center mt-5">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {from}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {to}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>{" "}
        Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex px-6">
        {/* <button
          disabled={!prev}
          onClick={handlePrevBtn}
          className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-slate-200 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowLeft className="w-4 h-4" />
        </button>
        <button
          disabled={!next}
          onClick={handleNextBtn}
          className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-slate-200 rounded-e-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowRight className="w-4 h-4" />
        </button> */}
        {links.map((link) => (
          <button
            key={link.label}
            disabled={!link.url}
            onClick={() => RefetchUrl(link.url)}
            className={`size-10 flex justify-center items-center text-sm font-medium text-blue-500  border-slate-200 duration-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none first:rounded-l-lg last:rounded-r-lg border-y first:border-l last:border-r ${
              link.active ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {link.label === "&laquo; Previous" ? (
              <HiArrowLeft className="w-4 h-4" />
            ) : link.label === "Next &raquo;" ? (
              <HiArrowRight className="w-4 h-4" />
            ) : (
              link.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationComponent;
