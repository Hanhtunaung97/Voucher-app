import React, { useState } from "react";
import { CiTrash, CiLink } from "react-icons/ci";
import ShowDateComponent from "../utilities/ShowDateComponent";
import toast from "react-hot-toast";
import SweetAlert2 from "react-sweetalert2";
import { useSWRConfig } from "swr";
import { quantum } from "ldrs";
import { Link, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
quantum.register();

const VoucherRowComponent = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    created_at,
    net_total,
    sale_date,
  },
}) => {
  const nav = useNavigate();
  const [token] = useCookie("my_token");
  const [isDelete, setIsDelete] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const { mutate } = useSWRConfig();
  const handleDeleteBtn = async (e) => {
    e.stopPropagation();
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
        await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });
        setIsDelete(false);
        mutate(import.meta.env.VITE_API_URL + "/vouchers");
        toast.success(`${customer_name}'s voucher deleted successfully!`);
      },
    });
  };
  const handleNavBtn = () => {
    nav(`/dashboard/vouchers/${id}`);
  };
  return (
    <>
      <tr
        onClick={handleNavBtn}
        className=" hover:bg-blue-50 duration-200 cursor-pointer border-b border-b-blue-100 bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700"
      >
        <td className="px-6 py-4">{id}</td>
        <td className="px-6 py-4 text-nowrap">{voucher_id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
        >
          <div className="flex flex-col space-y-0">
            <span className="text-base"> {customer_name}</span>
            <span className=" text-sm text-slate-500">{customer_email}</span>
          </div>
        </th>
        <td className="px-6 py-4 text-end">{net_total}</td>
        <td className="px-6 py-4 text-end text-nowrap">
          <div className="flex flex-col space-y-0 text-xs">
            <ShowDateComponent timeStamp={created_at} />
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex space-x-2 justify-end">
            <div className="inline-flex rounded-md gap-2" role="group">
              <button
                onClick={handleDeleteBtn}
                type="button"
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-red-400 rounded-full hover:bg-red-100 hover:border-red-200 hover:text-red-700 focus:border-0 focus:z-10 focus:ring-2 focus:ring-red-200 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white"
              >
                {isDelete ? (
                  <>
                    <l-quantum size="26" speed="1.75" color="red"></l-quantum>
                  </>
                ) : (
                  <CiTrash className="w-4 h-4 duration-100 group-hover:w-5 group-hover:h-5" />
                )}
              </button>
              <Link
                to={`/vouchers/${id}`}
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-400 rounded-full hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <CiLink className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
              </Link>
            </div>
          </div>
        </td>
      </tr>
      <SweetAlert2 {...swalProps} />
    </>
  );
};

export default VoucherRowComponent;
