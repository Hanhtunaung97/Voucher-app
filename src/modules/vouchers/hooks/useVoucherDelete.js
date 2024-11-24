import { useState } from "react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { destroyVoucher } from "../../../services/voucher";
const useConfirmDeleteVoucher = (id, customer_name) => {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
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
        try {
          const res = await destroyVoucher(id);
          const json = await res.json();

          if (res.status === 200) {
            setIsDelete(false);
            const searchParams = params.toString();
            if (searchParams === "") {
              mutate(`${import.meta.env.VITE_API_URL}/vouchers`);
            } else {
              mutate(
                `${import.meta.env.VITE_API_URL}/vouchers?${searchParams}`
              );
            }
            toast.success(`${customer_name}'s voucher deleted successfully!`);
          } else {
            toast.error(json.message);
          }
        } catch (error) {
          console.error("Error deleting voucher:", error);
          toast.error("Something went wrong. Please try again later.");
        } finally {
          setIsDelete(false);
        }
      },
    });
  };
  const handleNavBtn = () => {
    nav(`/dashboard/vouchers/detail/${id}`);
  };
  const handleLinkBtn = (e) => {
    e.stopPropagation();
    nav(`/dashboard/vouchers/detail/${id}`);
  };
  return [handleDeleteBtn, handleNavBtn, handleLinkBtn, swalProps, isDelete];
};
export default useConfirmDeleteVoucher;
