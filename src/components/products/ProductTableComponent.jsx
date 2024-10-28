import React from "react";
import ProductGroupComponent from "./ProductGroupComponent";
import { useSearchParams } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
const ProductTableComponent = ({ fetchUrl, setFetchUrl }) => {
  const [params, setParams] = useSearchParams();
  const handleSortParams = (sortType) => {
    console.log(sortType);
    const sortParams = new URLSearchParams(sortType).toString();
    console.log(sortParams);
    setParams(sortType);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
        <thead className="text-xs text-slate-700 uppercase bg-blue-200 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3">
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
              PRODUCT NAME
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              <div className="flex items-center justify-end gap-1">
                <span className="flex items-center flex-col">
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "price",
                      sort_direction: "asc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronUp />
                  </button>
                  <button
                    onClick={handleSortParams.bind(null, {
                      sort_by: "price",
                      sort_direction: "desc",
                    })}
                    className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
                  >
                    <HiChevronDown />
                  </button>
                </span>
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
