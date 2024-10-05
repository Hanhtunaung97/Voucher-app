import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import printJS from "print-js";
import html2pdf from "html2pdf.js";
import { HiOutlinePrinter } from "react-icons/hi2";
import { FaFilePdf } from "react-icons/fa";
const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherDetailComponent = () => {
  const { id } = useParams();
  const pdfRef = useRef();
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );
  console.log(data);
  //   console.log(data);
  const handlePrintBtn = () => {
    // return print();
    printJS({
      printable: "printable-section", // ID of the element to print
      type: "html",
      targetStyles: ["*"], // Print with styles applied
    });
  };
  const handlePDFBtn = () => {
    const element = pdfRef.current;
    const options = {
      margin: 0.1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };
  return (
    <div className="w-full h-full pb-10">
      <div className="w-full mx-2 lg:w-1/2 h-full  lg:mx-auto mt-5">
        {isLoading ? (
          <div className="h-[500px] flex justify-center items-center">
            <h1 className=" text-xl font-bold text-red-500 flex items-center">
              <span className=" text-blue-700">Loading...</span>
              <span className=" inline-block p-1 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700  animate-spin"></span>
            </h1>
          </div>
        ) : (
          <>
            {data && (
              <div className="flex flex-col gap-7">
                <div
                  ref={pdfRef}
                  id="printable-section"
                  className="max-w-full print:w-[14.8cm] shadow print:shadow-none rounded-lg p-5 bg-white "
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h1 className="text-xl lg:text-2xl font-bold mb-2 font-heading">
                        INVOICE
                      </h1>
                      <p className="text-sm lg:text-base">{data.voucher_id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Invoice to</p>
                      <p className="text-sm">{data.customer_name}</p>
                      <p className="text-xs">Date: {data.sale_date}</p>
                    </div>
                  </div>

                  <table className="w-full mb-8">
                    <thead>
                      <tr className=" bg-blue-50">
                        <th className="text-left py-2 text-sm">No</th>
                        <th className="text-left py-2 text-sm">Description</th>
                        <th className="text-right py-2 text-sm">Qty</th>
                        <th className="text-right py-2 text-sm">Price(MYR)</th>
                        <th className="text-right py-2 text-sm">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.saleRecords.map((record, index) => (
                        <tr
                          key={record.id}
                          className="border-b border-blue-100 "
                        >
                          <td className="py-2 text-sm">{index + 1}</td>
                          <td className="py-2 text-sm">
                            {record.product.product_name}
                          </td>
                          <td className="text-right py-2 text-sm">
                            {record.quantity}
                          </td>
                          <td className="text-right py-2 text-sm">
                            {record.product.price}
                          </td>
                          <td className="text-right py-2 text-sm">
                            {record.cost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 text-right text-sm" colSpan={4}>
                          Total
                        </td>
                        <td className="py-2 text-right text-sm">
                          {data.total.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 text-right text-sm" colSpan={4}>
                          Tax (12%)
                        </td>
                        <td className="py-2 text-right text-sm">
                          {data.tax.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td
                          className="py-2 text-right text-sm font-semibold"
                          colSpan={4}
                        >
                          Net Total
                        </td>
                        <td className="py-2 text-right text-sm">
                          {data.netTotal.toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className=" text-xs mb-8 ">
                    <div className="">
                      <h2 className="font-bold mb-2 font-heading">
                        Payment Transfer to
                      </h2>
                      <p>Kpay,Wave - 09250152018</p>
                      <p>KBZ Bank - 02730102705025601</p>
                      <p>AYA Bank - 20003674121</p>
                    </div>
                    <div className=" text-end">
                      <h2 className="font-bold text-base lg:text-lg font-heading">
                        MMS IT
                      </h2>
                      <p>48, 1st Floor, Shan Kone St.</p>
                      <p>+959-250-152-018</p>
                      <p>enquiry@mms-it.com</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-slate-300 pt-4">
                    <p className="mt-4 text-center text-sm">Thanks to You</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center gap-5">
                  <button
                    onClick={handlePrintBtn}
                    type="button"
                    className="text-white print:hidden disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200 flex items-center gap-2"
                  >
                    <span>Print</span>
                    <HiOutlinePrinter className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handlePDFBtn}
                    className="text-blue-700 border border-blue-200 bg-white hover:bg-blue-100   focus:ring focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200 flex items-center gap-2"
                  >
                    <span>Download</span>
                    <FaFilePdf className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VoucherDetailComponent;
