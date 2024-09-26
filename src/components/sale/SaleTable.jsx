import React from "react";
import SaleRecordGroup from "./SaleRecordGroup";
import useSaleRecordStore from "../../store/useSaleRecordStore";

const SaleTable = () => {
  const {saleRecords}=useSaleRecordStore();
  const total=saleRecords.reduce((acc,{cost})=>acc+cost,0);
  const tax=total*0.12;
  const netTotal=total+tax;
  return (
    <>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-blue-200 dark:bg-blue-700 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Cost
              </th>
              <th scope="col" className="px-2 py-4 text-end">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody id="recordGroup">
            <SaleRecordGroup />
          </tbody>
          <tfoot>
            <tr className="border-b">
              <td className="px-6 py-4 text-end" colSpan={4}>
                Total
              </td>
              <td className="px-6 py-4 text-end">{total.toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 text-end" colSpan={4}>
                Vat(Tax 12%)
              </td>
              <td className="px-6 py-4 text-end">{tax.toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 text-end font-semibold" colSpan={4}>
                Net Total (MYR)
              </td>
              <td className="px-6 py-4 text-end">{netTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="hidden mt-0 print:flex flex-col gap-3 justify-center items-center print:mt-10">
        <p className="font-bold">ဝယ်ယူအားပေးမူ့ကို ကျေးဇူး အထူးတင်ရှိပါသည်။</p>
        <p className="text-slate-600">နောက်လည်း လာအားပေးပါခင်ဗျာ။</p>
      </div>
    </>
  );
};

export default SaleTable;
