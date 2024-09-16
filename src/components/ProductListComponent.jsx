import React from "react";
import emptyList from "../assets/empty.svg";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const ProductListComponent = () => {
  return (
    <div>
      {/* Search and Add */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product"
          />
        </div>
        <button
          type="submit"
          className="text-white  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2"
        >
          Add New Product
          <FaPlus className="w-3 h-3 text-white " />
        </button>
      </div>
      {/* Product Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
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
