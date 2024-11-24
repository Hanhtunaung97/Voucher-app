import React from "react";
import SweetAlert2 from "react-sweetalert2";
import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { orbit } from "ldrs";
import useSaleRecord from "../hooks/useSaleRecord";
orbit.register();

const SaleRecord = ({
  index,
  record: {
    product_id,
    quantity,
    cost,
    created_at,
    product: { product_name, price },
  },
}) => {
  const {
    isDelete,
    swalProps,
    handleDeleteBtn,
    handleDecreaseBtn,
    handleIncreaseBtn,
  } = useSaleRecord(product_id, quantity, cost, created_at, {
    product_name,
    price,
  });
  return (
    <tr className="group odd:bg-white odd:dark:bg-gray-900 even:bg-blue-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4 td-counter">{index + 1}</td>
      <th
        scope="row"
        className="record-name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end record-price">{price}</td>
      <td className="px-6 py-4 text-end">
        <button
          onClick={handleDecreaseBtn}
          className="q-sub pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded"
        >
          <LuMinus className="w-4 h-4 pointer-events-none" />
        </button>
        <span className="record-q w-5 inline-block">{quantity}</span>
        <button
          onClick={handleIncreaseBtn}
          className="q-add pointer-events-none ms-1 group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded"
        >
          <LuPlus className="w-4 h-4 pointer-events-none" />
        </button>
      </td>
      <td className="px-6 py-4 text-end ">
        <span className="record-cost">{cost.toFixed(2)}</span>
      </td>
      <td className="px-2 py-4 flex justify-end">
        <button
          onClick={handleDeleteBtn}
          type="button"
          className=" opacity-0 group-hover:opacity-100  duration-200 size-8 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-red-400 rounded-full hover:bg-red-100 hover:border-red-200 hover:text-red-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-red-200 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white"
        >
          {isDelete ? (
            <>
              <l-orbit size="20" speed="1.5" color="#f05252"></l-orbit>
            </>
          ) : (
            <LuTrash2 className="w-4 h-4 duration-100 group-hover:w-5 group-hover:h-5 pointer-events-none" />
          )}
        </button>
      </td>
      <SweetAlert2 {...swalProps} />
    </tr>
  );
};

export default SaleRecord;
