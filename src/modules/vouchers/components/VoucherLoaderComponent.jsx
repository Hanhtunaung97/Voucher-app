import React from "react";
import { useSearchParams } from "react-router-dom";

const VoucherLoaderComponent = () => {
  const [params, setParams] = useSearchParams();
  const limit = params.get("limit") ?? 5;
  const loaderArray = Array.from(
    { length: Number(limit) },
    (_, index) => index
  );
  return (
    <>
      {loaderArray.map((index) => (
        <tr
          key={index}
          className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-800 border-b dark:border-slate-700 animate-pulse"
        >
          <td className="px-6 py-4">
            <div className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
          >
            <div className="flex flex-col space-y-1 text-xs items-start">
              <div className="w-28 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="w-16 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
          </th>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
          >
            <div className="flex items-center gap-2 justify-start">
              <div className="w-8 h-8 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              <div className="flex flex-col space-y-1 text-xs items-start">
                <div className="w-24 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
                <div className="w-40 h-4 bg-slate-300 dark:bg-slate-700 rounded text-end"></div>
              </div>
            </div>
          </th>
          <td className="px-6 py-4 flex justify-end">
            <div className="w-16 h-4 bg-slate-300 dark:bg-slate-700 rounded  text-end"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="flex flex-col space-y-1 text-xs items-end">
              <div className="w-16 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="w-12 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2 justify-end">
              <div
                className="inline-flex gap-1 rounded-md shadow-sm"
                role="group"
              >
                <div className="w-8 h-8 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default VoucherLoaderComponent;
