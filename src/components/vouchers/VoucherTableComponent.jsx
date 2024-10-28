import React from "react";
import VoucherGroupComponent from "./VoucherGroupComponent";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const VoucherTableComponent = ({ fetchUrl, setFetchUrl }) => {
  const [params, setParams] = useSearchParams();
  const handleSortParams = (sortType) => {
    console.log(sortType);
    const sortParams = new URLSearchParams(sortType).toString();
    console.log(sortParams);
    setParams(sortType);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?${sortParams}`);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
        <thead className="text-xs text-slate-700 uppercase bg-blue-100 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              <div className="flex items-center gap-1">
                <span className="flex items-center flex-col">
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "id",
                      sort_direction: "asc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronUp />
                  </button>
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "id",
                      sort_direction: "desc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronDown />
                  </button>
                </span>
                <span>#</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Voucher ID
            </th>
            <th scope="col" className="px-6 py-3">
              CUSTOMER
            </th>

            <th scope="col" className="px-6 py-3 text-end">
              <div className="flex items-center justify-end gap-1">
                <span className="flex items-center flex-col">
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "net_total",
                      sort_direction: "asc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronUp />
                  </button>
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "net_total",
                      sort_direction: "desc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronDown />
                  </button>
                </span>
                <span>Net Total</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              DATE
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <VoucherGroupComponent fetchUrl={fetchUrl} />
        </tbody>
      </table>
    </div>
  );
};

export default VoucherTableComponent;
