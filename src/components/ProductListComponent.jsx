import React from "react";
import emptyList from "../assets/empty.svg";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import useSWR from "swr";
import SkeletonLoaderComponent from "./SkeletonLoaderComponent";

const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductListComponent = () => {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL+"/products",
    fetcher
  );
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
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
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
                <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-800 border-b dark:border-slate-700">
                  <td className="px-6 py-4">1</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4 text-end">45.99</td>
                  <td className="px-6 py-4 text-end">
                    <div className="flex flex-col space-y-0 text-xs">
                      <p>2021-01-01</p>
                      <p>19:35</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2 justify-end">
                      <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                      >
                        <button
                          type="button"
                          className="group duration-200 size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-slate-200 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                          <CiEdit className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
                        </button>
                        <button
                          type="button"
                          className="group duration-200 size-10 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-slate-200 rounded-e-lg hover:bg-red-100 hover:border-red-100 hover:text-red-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-red-200 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white"
                        >
                          <CiTrash className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            )}

            {/* empty list */}
            <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-800 border-b dark:border-slate-700 ">
              <td colSpan={5} className="px-6 py-6">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <img src={emptyList} alt={"emptyList"} className="w-44" />
                  <p className="text-blue-500">There is no lists.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListComponent;