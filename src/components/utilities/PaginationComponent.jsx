import React from "react";
import {
  LuChevronRight,
  LuChevronLeft,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
const PaginationComponent = ({
  links: { prev, next, last, first } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },
  meta: { from, to, total, links, per_page, current_page, path, last_page } = {
    from: 0,
    to: 0,
    total: 0,
    links: [],
    per_page: 0,
    current_page: 0,
    last_page: 0,
    path: "",
  },
  RefetchUrl,
}) => {
  const [params, setParams] = useSearchParams();
  // const currentLimit = params.get("limit") ?? 5;
  const pageLimits = [5, 10, 20, 50, 100];
  const handleRowLimitSelect = (e) => {
    setParams({ limit: e.target.value });
    RefetchUrl(`${path}?limit=${e.target.value}`);
  };
  const handlePrevBtn = () => {
    RefetchUrl(prev);
  };

  const handleNextBtn = () => {
    RefetchUrl(next);
  };
  const handleFirstBtn = () => {
    RefetchUrl(first);
  };
  const handleLastBtn = () => {
    RefetchUrl(last);
  };

  return (
    <div className="flex justify-between items-center mt-5 ">
      {/* Help text */}
      <span className=" text-gray-700 dark:text-gray-400 text-xs">
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
      {/* Pages list */}
      <div className=" flex items-center gap-2  ">
        <label
          htmlFor="countries"
          className="block text-gray-700  text-nowrap dark:text-white text-xs"
        >
          Rows per page
        </label>
        <select
          onChange={handleRowLimitSelect}
          className="flex items-center justify-center h-full text-xs font-medium border-y border rounded-lg border-blue-200  dark:bg-blue-800 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          // value={currentLimit}
        >
          {pageLimits.map((limit, index) => (
            <option key={index} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2 items-end px-6">
        <div className="inline-flex ">
          <button
            disabled={!prev}
            onClick={handlePrevBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200  border-e-0 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <LuChevronLeft className="w-4 h-4" />
          </button>
          <button
            disabled={!first}
            onClick={handleFirstBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200  border-x-0  hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <LuChevronsLeft className="w-4 h-4" />
          </button>
          <button
            disabled={!last}
            onClick={handleLastBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200 border-x-0  hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <LuChevronsRight className="w-4 h-4" />
          </button>
          <button
            disabled={!next}
            onClick={handleNextBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-200  border-s-0 rounded-e-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            <LuChevronRight className="w-4 h-4" />
          </button>

          {/* {links.map((link) => (
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
        ))} */}
        </div>
        <span className="text-xs text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {current_page}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {last_page}
          </span>{" "}
          Pages
        </span>
      </div>
    </div>
  );
};

export default PaginationComponent;
