import React from "react";
import ProductGroupComponent from "./ProductGroupComponent";
import SortingComponent from "../utilities/SortingComponent";
const ProductTableComponent = ({ fetchUrl, setFetchUrl }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
        <thead className="text-xs text-slate-700 uppercase bg-blue-200 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-1">
                <SortingComponent
                  setFetchUrl={setFetchUrl}
                  sort_by={"id"}
                  tableName={"products"}
                />
                <span>#</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCT NAME
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              <div className="flex items-center justify-end gap-1">
                <SortingComponent
                  setFetchUrl={setFetchUrl}
                  sort_by={"price"}
                  tableName={"products"}
                />
                <span> PRICE(MYR)</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              CREATED_AT
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              UPDATED_AT
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductGroupComponent fetchUrl={fetchUrl} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTableComponent;
