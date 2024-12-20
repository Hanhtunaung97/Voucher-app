import React from "react";
import SweetAlert2 from "react-sweetalert2";
import { Link } from "react-router-dom";
import ShowDateComponent from "../../../components/utilities/ShowDateComponent";
import { LuPencilLine, LuTrash2 } from "react-icons/lu";
import { orbit } from "ldrs";
import useConfirmDelete from "../hooks/useProductDelete";
orbit.register();

const ProductRowComponent = ({ product }) => {
  const [isDelete, handleDeleteBtn, swalProps] = useConfirmDelete(
    product.id,
    product.product_name
  );

  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-blue-50 even:dark:bg-slate-800  dark:border-slate-700  duration-200 overflow-x-hidden">
        <td className="px-6 py-4">{product.id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
        >
          {product.product_name}
        </th>
        <td className="px-6 py-4 text-end">{product.price}</td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-0 text-xs">
            <ShowDateComponent timeStamp={product.created_at} />
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-0 text-xs">
            <ShowDateComponent timeStamp={product.updated_at} />
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex space-x-2 justify-end">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Link
                to={`/dashboard/products/edit/${product.id}`}
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-slate-200 rounded-s-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <LuPencilLine className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
              </Link>
              <button
                onClick={handleDeleteBtn}
                type="button"
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-slate-200 rounded-e-lg hover:bg-red-100 hover:border-red-100 hover:text-red-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-red-200 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white"
              >
                {isDelete ? (
                  <>
                    <l-orbit size="20" speed="1.5" color="#f05252"></l-orbit>
                  </>
                ) : (
                  <LuTrash2 className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
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
