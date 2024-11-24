import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createProduct } from "../../../services/product";
const useProductCreate = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
    reset,
  } = useForm();

  const handleCreateForm = async (data) => {
    console.log(data);
    try {
      const newProduct = {
        product_name: data.product_name,
        price: data.price,
      };

      const res = await createProduct(newProduct);
      const json = await res.json();

      if (res.status === 201) {
        reset();
        toast.success(`${data.product_name} product created successfully`);
        if (data.to_products) {
          nav("/dashboard/products");
        }
      } else {
        toast.error(
          json.message || "An error occurred while creating the product."
        );
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product. Please try again later.");
    }
  };

  return {
    register,
    handleSubmit,
    handleCreateForm,
    errors,
    isSubmitting,
    isLoading,
  };
};
export default useProductCreate;
