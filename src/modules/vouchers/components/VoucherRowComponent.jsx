import React from "react";
import SweetAlert2 from "react-sweetalert2";
import ShowDateComponent from "../../../components/utilities/ShowDateComponent";
import { LuCalendar, LuLink2, LuTrash2 } from "react-icons/lu";
import { orbit } from "ldrs";
import Avatar from "react-avatar";
import useConfirmDeleteVoucher from "../hooks/useVoucherDelete";
orbit.register();

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
  const [handleDeleteBtn, handleNavBtn, handleLinkBtn, swalProps, isDelete] =
    useConfirmDeleteVoucher(id, customer_name);
  return (
    <>
      <tr
        onClick={handleNavBtn}
        className=" hover:bg-blue-50 duration-200 cursor-pointer border-b border-b-blue-100 bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700"
      >
        <td className="px-6 py-4 text-nowrap">{id}</td>
        <td className="px-6 py-4 text-nowrap text-start">
          <div className="flex flex-col space-y-0">
            <p>{voucher_id}</p>
            <span className="flex items-center gap-x-1 text-xs text-slate-500">
              <LuCalendar />
              <span> {sale_date}</span>
            </span>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
        >
          <div className="flex flex-col space-y-0">
            <div className=" inline-flex gap-2 items-center">
              <Avatar
                name={customer_name}
                round={true}
                size="30"
                textSizeRatio={2}
              />
              <div className="flex flex-col space-y-0">
                <span className="text-base"> {customer_name}</span>
                <span className=" text-xs text-slate-500">
                  {customer_email}
                </span>
              </div>
            </div>
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
                    <l-orbit size="20" speed="1.5" color="#f05252"></l-orbit>
                  </>
                ) : (
                  <LuTrash2 className="w-4 h-4 duration-100 group-hover:w-5 group-hover:h-5" />
                )}
              </button>
              <button
                onClick={handleLinkBtn}
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-400 rounded-full hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <LuLink2 className="w-4 h-4 group-hover:w-5 group-hover:h-5" />
              </button>
            </div>
          </div>
        </td>
      </tr>
      <SweetAlert2 {...swalProps} />
    </>
  );
};

export default VoucherRowComponent;
