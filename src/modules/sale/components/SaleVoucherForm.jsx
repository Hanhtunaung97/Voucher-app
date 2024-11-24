import React from "react";
import generateInvoiceId from "../../../utils/generateInvoiceId";
import { BtnSpinnerComponent } from "../../../components";
import { LuBadgeDollarSign } from "react-icons/lu";
import useSaleVoucherForm from "../hooks/useSaleVoucherForm";

const SaleVoucherForm = () => {
  const {
    saleDate,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isLoading,
    handleSaleVoucherForm,
    handleNavBtn,
  } = useSaleVoucherForm();
  return (
    <form
      className="flex flex-col gap-10 h-full"
      onSubmit={handleSubmit(handleSaleVoucherForm)}
      id="saleVoucherForm"
    >
      <div className=" grid grid-cols-1 gap-5">
        <div className=" col-span-full">
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
            disabled={isSubmitting}
            type="text"
            readOnly
            id="voucherId"
            className={` focus:outline-none focus:ring-0 focus:border-slate-300
             border-slate-300  opacity-50 bg-slate-50 border pointer-events-none select-none  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white `}
          />
          {/* {errors.voucher_id?.type === "required" && (
        <p className="text-red-500 mt-2 text-sm">
          Voucher ID is required !
        </p>
      )} */}
        </div>
        <div className=" col-span-full">
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
            disabled={isSubmitting}
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
        <div className=" col-span-full">
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
            disabled={isSubmitting}
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
            <p className="text-red-500 mt-2 text-sm">Invalid email address !</p>
          )}
        </div>
        <div className=" col-span-full">
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
            disabled={isSubmitting}
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
            <p className="text-red-500 mt-2 text-sm">Sale Date is required !</p>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-end gap-5 lg:gap-0 mt-auto">
        <div>
          <button
            onClick={handleNavBtn}
            type="button"
            className="text-blue-500 text-xs  bg-white border border-blue-400 hover:bg-blue-500 hover:text-white  duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-1 w-full sm:w-auto"
          >
            <span>Lists</span>
            <LuBadgeDollarSign className="w-4 h-4 " />
          </button>
        </div>

        <div className="flex flex-col justify-center items-end gap-2 ">
          <div className=" flex justify-end items-center">
            <label
              htmlFor="correct_check"
              className={`${
                errors.correct_check && "hidden"
              } me-2 text-xs font-medium text-slate-500 dark:text-slate-300`}
            >
              Every Field is Correct.
            </label>
            {errors.correct_check?.type === "required" && (
              <p className="text-red-500 me-2 text-xs">
                Correct check is required !
              </p>
            )}
            <div className="flex items-center h-5">
              <input
                {...register("correct_check", { required: true })}
                disabled={isLoading}
                id="correct_check"
                form="saleVoucherForm"
                type="checkbox"
                defaultValue
                className={`${
                  errors.correct_check &&
                  " border border-red-300 focus:ring-3 focus:ring-red-500 bg-white"
                } disabled:opacity-75 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800`}
              />
            </div>
          </div>

          <div className=" flex justify-end items-center">
            <label
              htmlFor="redirect_to_Detail"
              className={`
            ${
              errors.redirect_to_Detail && "hidden"
            } me-2 text-xs font-medium text-slate-500 dark:text-slate-300`}
            >
              Redirect to Voucher Detail
            </label>
            <div className="flex items-center h-5">
              <input
                {...register("redirect_to_Detail")}
                disabled={isSubmitting}
                id="redirect_to_Detail"
                form="saleVoucherForm"
                type="checkbox"
                className={`disabled:opacity-75 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800`}
              />
            </div>
          </div>

          <button
            form="saleVoucherForm"
            type="submit"
            disabled={isSubmitting}
            className="text-white disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="flex items-center justify-center gap-x-3">
                  <span>Creating</span>
                  <BtnSpinnerComponent />
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
    </form>
  );
};

export default SaleVoucherForm;
