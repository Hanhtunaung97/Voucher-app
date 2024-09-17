import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useSWRConfig } from "swr";
import { newtonsCradle } from "ldrs";
import toast from "react-hot-toast";
import SweetAlert2 from "react-sweetalert2";
const ProductRowComponent = ({
  product: { id, product_name, price, created_at },
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const { mutate } = useSWRConfig();
  newtonsCradle.register();
  const data = new Date(created_at);
  const createdDate = data.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const createdTime = data.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: false,
  });
  const handleDeleteBtn = async () => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f83f8",
      cancelButtonColor: "#f05252",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        setSwalProps({
          show: false,
        });
        setIsDelete(true);
        await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
          method: "DELETE",
        });
        setIsDelete(false);
        mutate(import.meta.env.VITE_API_URL + "/products");
        toast.success("Product deleted successfully");
      },
    });
    // console.log(id);
  };
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-800 border-b dark:border-slate-700 hover:scale-105 duration-200 overflow-x-hidden">
        <td className="px-6 py-4">{id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
        >
          {product_name}
        </th>
        <td className="px-6 py-4 text-end">{price}</td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-0 text-xs">
            <p>{createdDate}</p>
            <p>{createdTime}</p>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex space-x-2 justify-end">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="group duration-200 size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-slate-200 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <CiEdit className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
              </button>
              <button
                onClick={handleDeleteBtn}
                type="button"
                className="group duration-200 size-10 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-slate-200 rounded-e-lg hover:bg-red-100 hover:border-red-100 hover:text-red-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-red-200 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white"
              >
                {isDelete ? (
                  <>
                    <l-newtons-cradle
                      size="38"
                      speed="1.4"
                      color="red"
                    ></l-newtons-cradle>
                  </>
                ) : (
                  <CiTrash className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
                )}
              </button>
            </div>
          </div>
        </td>
      </tr>
      <SweetAlert2 {...swalProps} />
    </>
  );
};

export default ProductRowComponent;