import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useSaleRecordStore from "../../../store/useSaleRecordStore";
import { createSale } from "../../../services/sale";
const useSaleVoucherForm = () => {
  const nav = useNavigate();
  const saleDate = new Date().toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
    reset,
  } = useForm();
  const { records, resetSaleRecord } = useSaleRecordStore();

  const handleSaleVoucherForm = async (data) => {
    const total = records.reduce((acc, { cost }) => acc + cost, 0);
    const tax = total * 0.12;
    const net_total = total + tax;
    const currentVoucher = { ...data, records, total, tax, net_total };
    try {
      const res = await createSale(currentVoucher);
      const json = await res.json();
      if (res.status === 201) {
        reset();
        resetSaleRecord();
        toast.success(
          `${data.customer_name}'s voucher is created successfully`
        );
        if (data.redirect_to_Detail) {
          nav(`/dashboard/vouchers/detail/${json?.data?.id}`);
        }
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      console.error("Error creating voucher:", error);
      toast.error(
        "An error occurred while creating the voucher. Please try again."
      );
    }
  };
  const handleNavBtn = () => {
    nav("/dashboard/vouchers");
  };

  return {
    saleDate,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isLoading,
    handleSaleVoucherForm,
    handleNavBtn,
  };
};
export default useSaleVoucherForm;
