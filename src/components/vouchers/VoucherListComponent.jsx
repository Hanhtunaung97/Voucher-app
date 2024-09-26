import React from "react";
import { FaSearch, FaFileInvoiceDollar } from "react-icons/fa";
import VoucherTableComponent from "./VoucherTableComponent";
import { Link, useNavigate } from "react-router-dom";
const VoucherListComponent = () => {
  const nav = useNavigate();
  const handleNavBtn = () => {
    nav("/sale");
  };
  return (
    <div>
      {/* Search and Add */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </div>
          <input
            type="search"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Voucher"
          />
        </div>
        <button
        onClick={handleNavBtn}
          type="button"
          className="text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2"
        >
          Create Sale Voucher
          <FaFileInvoiceDollar className="w-4 h-4 text-white " />
        </button>
      </div>
      {/* Voucher Table */}
      <VoucherTableComponent />
    </div>
  );
};

export default VoucherListComponent;
