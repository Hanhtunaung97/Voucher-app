import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import useSWR from "swr";
import SkeletonLoaderComponent from "./SkeletonLoaderComponent";
import EmptyListComponent from "./EmptyListComponent";
import ProductRowComponent from "./ProductRowComponent";


const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductListComponent = () => {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  return (
    <div className="w-full pb-5">
      {/* Search and Add */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </div>
          <input
            type="search"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product"
          />
        </div>
        <button
          type="submit"
          className="text-white  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2"
        >
          Add New Product
          <FaPlus className="w-4 h-4 text-white " />
        </button>
      </div>
      {/* Product Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
          <thead className="text-xs text-slate-700 uppercase bg-blue-50 dark:bg-slate-700 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                PRODUCT NAME
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                PRICE(USD)
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                CREATED_AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <SkeletonLoaderComponent />
            ) : (
              <>
                {data.length === 0 ? (
                 <EmptyListComponent/>
                ) : (
                  data.map((el) => (
                    <ProductRowComponent key={el.id} product={el} />
                  ))
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListComponent;
