import { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import printJS from "print-js";
import html2pdf from "html2pdf.js";
import { fetchVouchers } from "../../../services/voucher";
const useVoucherDetail = () => {
  const { id } = useParams();
  const pdfRef = useRef();
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetchVouchers
  );
  // console.log(data);
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
  return { data, error, isLoading, handlePrintBtn, handlePDFBtn, pdfRef };
};
export default useVoucherDetail;
