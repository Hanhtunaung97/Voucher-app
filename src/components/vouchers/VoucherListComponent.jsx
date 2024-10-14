import React, { useState } from "react";
import { FaSearch, FaFileInvoiceDollar } from "react-icons/fa";
import VoucherTableComponent from "./VoucherTableComponent";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import useSWR from "swr";
import PaginationComponent from "../utilities/PaginationComponent";
const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherListComponent = () => {
  const nav = useNavigate();
  // const [search,setSearch]=useState("");
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers`
  );
  const handleNavBtn = () => {
    nav("/sale");
  };
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  const RefetchUrl = (url) => {
    setFetchUrl(url);
  };
  const handleSearchInput = debounce((e) => {
    // console.log(e.target.value);
    // setSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
  }, 1000);
  return (
    <div>
      {/* Search and Add */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </div>
          <input
            onChange={handleSearchInput}
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
      <VoucherTableComponent fetchUrl={fetchUrl} />

      {/* Pagination */}
      {!isLoading && (
        <PaginationComponent
          links={data?.links}
          meta={data?.meta}
          RefetchUrl={RefetchUrl}
        />
      )}
    </div>
  );
};

export default VoucherListComponent;
