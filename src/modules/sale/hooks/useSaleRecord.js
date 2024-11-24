import { useState } from "react";
import toast from "react-hot-toast";
import useSaleRecordStore from "../../../store/useSaleRecordStore";
const useSaleRecord = (product_id, quantity, cost, created_at, product) => {
  const [isDelete, setIsDelete] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const { removeSaleRecord, changeQuantity } = useSaleRecordStore();
  const handleDeleteBtn = () => {
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
        removeSaleRecord(product_id);
        setIsDelete(false);
        toast.success(`${product.product_name} product deleted successfully`);
      },
    });
  };
  const handleDecreaseBtn = () => {
    quantity > 1 && changeQuantity(product_id, -1);
  };
  const handleIncreaseBtn = () => {
    changeQuantity(product_id, 1);
  };
  return {
    isDelete,
    swalProps,
    handleDeleteBtn,
    handleDecreaseBtn,
    handleIncreaseBtn,
  };
};
export default useSaleRecord;
