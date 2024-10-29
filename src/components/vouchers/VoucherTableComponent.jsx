import React from "react";
import VoucherGroupComponent from "./VoucherGroupComponent";
import VoucherSortingComponent from "../utilities/VoucherSortingComponent";
const VoucherTableComponent = ({ fetchUrl, setFetchUrl }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
        <thead className="text-xs text-slate-700 uppercase bg-blue-100 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              <div className="flex items-center gap-1">
                <VoucherSortingComponent
                  setFetchUrl={setFetchUrl}
                  sort_by={"id"}
                />
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
                <VoucherSortingComponent
                  setFetchUrl={setFetchUrl}
                  sort_by={"net_total"}
                />
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
