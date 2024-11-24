import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useSWR, { useSWRConfig } from "swr";
import { editProduct, fetchProducts } from "../../../services/product";
const useProductUpdate = (id) => {
  const nav = useNavigate();
  const { mutate } = useSWRConfig();
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + `/products/${id}`
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const { data, error, isLoading } = useSWR(fetchUrl, fetchProducts);

  const handleUpdateForm = async (data) => {
    console.log(data);
    try {
      const updatedProduct = {
        product_name: data.product_name,
        price: data.price,
      };

      const res = await editProduct(id, updatedProduct);
      const json = await res.json();

      if (res.status === 200) {
        if (data.correct_check) {
          nav("/dashboard/products");
        }
        mutate(fetchUrl);
        toast.success(`${data.product_name} product updated successfully`);
        reset();
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(handleUpdateForm),
    formState: { errors, isSubmitting },
    data,
    error,
    isLoading,
  };
};
export default useProductUpdate;
