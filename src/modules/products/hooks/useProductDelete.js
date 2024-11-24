import { useState } from "react";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { destroyProduct } from "../../../services/product";
// import { useSearchParams } from "react-router-dom";

const useConfirmDelete = (id, product_name) => {
  const [params, setParams] = useSearchParams();
  const [isDelete, setIsDelete] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const { mutate } = useSWRConfig();
  const handleDeleteBtn = async () => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: `You will not be able to recover ${product_name}!`,
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
          const res = await destroyProduct(id);
          if (res.status === 200) {
            const searchParams = params.toString();
            if (searchParams === "") {
              mutate(import.meta.env.VITE_API_URL + "/products");
            } else {
              mutate(
                `${import.meta.env.VITE_API_URL}/products?${searchParams}`
              );
            }
            toast.success(`${product_name} product deleted successfully`);
            setIsDelete(false);
          } else {
            toast.error(json.message);
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          toast.error("Something went wrong. Please try again later.");
        }
      },
    });
  };

  return [isDelete, handleDeleteBtn, swalProps];
};
export default useConfirmDelete;
