import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { dotSpinner } from "ldrs";
import toast from "react-hot-toast";
import generateInvoiceId from "../../utils/generateInvoiceId";
import SaleForm from "./SaleForm";
import SaleTable from "./SaleTable";
import useSaleRecordStore from "../../store/useSaleRecordStore";
dotSpinner.register();
const SaleVoucherInfo = () => {
  const [isSending, setIsSending] = useState(false);
  const saleDate = new Date().toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { saleRecords, resetSaleRecord } = useSaleRecordStore();
  const handleSaleVoucherForm = async (data) => {
    // to save on vouchers server
    const total = saleRecords.reduce((acc, { cost }) => acc + cost, 0);
    const tax = total * 0.12;
    const netTotal = total + tax;
    const currentVoucher = { ...data, saleRecords, total, tax, netTotal };
    setIsSending(true);
    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    setIsSending(false);
    reset();
    resetSaleRecord();
    toast.success(`${data.customer_name} voucher is created successfully`);
    console.log(currentVoucher);
  };
  return (
    <div className="flex flex-col justify-center gap-10">
      <form onSubmit={handleSubmit(handleSaleVoucherForm)} id="saleVoucherForm">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className=" col-span-1">
            <label
              htmlFor="voucherId"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Voucher ID
            </label>
            <input
              {...register("voucher_id", {
                required: true,
              })}
              defaultValue={generateInvoiceId()}
              disabled={isSending}
              type="text"
              id="voucherId"
              className={`${
                errors.voucher_id
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.voucher_id?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Voucher ID is required !
              </p>
            )}
          </div>
          <div className=" col-span-1">
            <label
              htmlFor="customerName"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              disabled={isSending}
              type="text"
              id="customerName"
              className={`${
                errors.customer_name
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Han Htun Aung"
            />
            {errors.customer_name?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Customer Name is required !
              </p>
            )}
            {errors.customer_name?.type === "min" && (
              <p className="text-red-500 mt-2 text-sm">
                Customer Name must be at least 3 letters !
              </p>
            )}
            {errors.customer_name?.type === "max" && (
              <p className="text-red-500 mt-2 text-sm">
                Customer Name must not be at more than 20 letters !
              </p>
            )}
          </div>
          <div className=" col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Customer Email
            </label>
            <input
              {...register("customer_email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              })}
              disabled={isSending}
              type="email"
              id="email"
              className={`${
                errors.customer_email
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Han123@gmail.com"
            />
            {errors.customer_email?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">Email is required !</p>
            )}
            {errors.customer_email?.type === "pattern" && (
              <p className="text-red-500 mt-2 text-sm">
                Invalid email address !
              </p>
            )}
          </div>
          <div className=" col-span-1">
            <label
              htmlFor="saleDate"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Sale Date
            </label>
            <input
              {...register("sale_date", {
                required: true,
              })}
              disabled={isSending}
              defaultValue={saleDate}
              type="date"
              id="saleDate"
              className={`${
                errors.sale_date
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="I Phone 16 pro max"
            />
            {errors.sale_date?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Sale Date is required !
              </p>
            )}
          </div>
        </div>
      </form>
      <hr className="h-[1px] border border-blue-100 " />
      <>
        <SaleForm />
        <SaleTable />
      </>
      <div className="flex justify-end items-center gap-x-3">
        <div className="flex items-start ">
          <div className="flex items-center h-5">
            <input
              {...register("correct_check", { required: true })}
              disabled={isSending}
              id="correct_check"
              type="checkbox"
              defaultValue
              className={`${
                errors.correct_check &&
                " border border-red-300 focus:ring-3 focus:ring-red-500 bg-white"
              } disabled:opacity-75 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800`}
            />
            {errors.correct_check?.type === "required" && (
              <p className="text-red-500 ms-2 text-sm">
                Correct check is required !
              </p>
            )}
          </div>
          <label
            htmlFor="correct_check"
            className={`${
              errors.correct_check && "hidden"
            } ms-2 text-sm font-medium text-slate-500 dark:text-slate-300`}
          >
            Every Field is Correct.
          </label>
        </div>
        <button
          form="saleVoucherForm"
          type="submit"
          disabled={isSending}
          className="text-white disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
        >
          {isSending ? (
            <>
              <div className="flex items-center justify-center gap-x-3">
                <span>Creating Voucher</span>
                <l-dot-spinner
                  size="16"
                  speed="0.9"
                  color="white"
                ></l-dot-spinner>
              </div>
            </>
          ) : (
            <>
              <span>Confirm Voucher</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SaleVoucherInfo;
