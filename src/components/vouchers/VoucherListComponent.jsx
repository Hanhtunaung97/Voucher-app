import React, { useState } from "react";
import { FaSearch, FaFileInvoiceDollar } from "react-icons/fa";
import VoucherTableComponent from "./VoucherTableComponent";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { debounce } from "lodash";
import useSWR from "swr";
import PaginationComponent from "../utilities/PaginationComponent";
import useCookie from "react-use-cookie";
const VoucherListComponent = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  // const [search,setSearch]=useState("");
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers${location.search}`
  );
  const handleNavBtn = () => {
    nav("/dashboard/sale");
  };
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  console.log(data);
  const RefetchUrl = (url) => {
    console.log(url);
    const currentUrl = new URL(url);
    console.log(currentUrl);
    const newSearchParams = new URLSearchParams(currentUrl.search);
    console.log(newSearchParams);
    console.log(params);
    const searchParamsObj = Object.fromEntries(newSearchParams.entries());
    console.log(searchParamsObj);
    setParams(searchParamsObj);
    setFetchUrl(url);
  };
  const handleSearchInput = debounce((e) => {
    // console.log(e.target.value);
    // setSearch(e.target.value);
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
    }
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
      <VoucherTableComponent fetchUrl={fetchUrl} setFetchUrl={setFetchUrl} />

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
