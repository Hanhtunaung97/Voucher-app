import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import EmptyListComponent from "../utilities/EmptyListComponent";
const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherDetailComponent = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );
  //   console.log(data);
  const handlePrintBtn = () => {
    return print();
  };

  return (
    <div className="w-full h-full print:h-screen">
      <div className="flex justify-center items-center flex-col gap-10 h-full mt-10">
        <div className="w-full md:w-1/2 flex justify-center items-center border border-blue-200 rounded-lg p-5 shadow hover:scale-105 duration-200">
          {isLoading ? (
            <div className=" ">
              <h1 className=" text-lg font-bold text-red-500 flex items-center">
                <span className=" text-blue-700">Loading...</span>
                <span className=" inline-block p-1 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700  animate-spin"></span>
              </h1>
            </div>
          ) : (
            <>
              {data && (
                <div className="flex gap-4 flex-col w-full ">
                  <div className="flex justify-between items-center font-heading ">
                    <h3>MMS Solution</h3>
                    <h1>Invoice</h1>
                  </div>
                  <hr className="h-[1px] border border-blue-100" />
                  <div className="flex items-center justify-center flex-col gap-2">
                    <h5 className="text-base font-medium text-slate-500">
                      {data.voucher_id}
                    </h5>
                    <h3 className=" font-semibold text-slate-700 text-xl">
                      {data.customer_name}
                    </h3>
                    <h5 className="text-base font-medium text-slate-500">
                      {data.customer_email}
                    </h5>
                  </div>
                  <hr className="h-[1px] border border-blue-100" />
                  <table className="w-full  text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
                    <tbody>
                      <tr className="hover:bg-blue-50 duration-200 cursor-pointer border-b border-b-blue-100 bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700">
                        <td className="px-6 py-4 ps-5">Date</td>
                        <td className="px-6 py-4 pe-5 text-end">
                          {data.sale_date}
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 duration-200 cursor-pointer border-b border-b-blue-100 bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700">
                        <td className="px-6 py-4 ps-5">Total(MYR)</td>
                        <td className="px-6 py-4 pe-5 text-end">
                          {data.total.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 duration-200 cursor-pointer border-b border-b-blue-100 bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700">
                        <td className="px-6 py-4 ps-5">Tax(12%)</td>
                        <td className="px-6 py-4 pe-5 text-end">
                          {data.tax.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 duration-200 cursor-pointer bg-white odd:dark:bg-slate-900  even:dark:bg-slate-800  dark:border-slate-700">
                        <td className="px-6 py-4 ps-5">Net Total(MYR)</td>
                        <td className="px-6 py-4 pe-5 text-end">
                          {data.netTotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
        <div className="hidden mt-0 print:flex flex-col gap-3 justify-center items-center print:mt-10">
          <p className="font-bold">
            ဝယ်ယူအားပေးမူ့ကို ကျေးဇူး အထူးတင်ရှိပါသည်။
          </p>
          <p className="text-slate-600">နောက်လည်း လာအားပေးပါခင်ဗျာ။</p>
        </div>
        <div>
          <button
            onClick={handlePrintBtn}
            type="button"
            className="text-white print:hidden disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailComponent;
