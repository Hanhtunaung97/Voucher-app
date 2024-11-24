import useSWR from "swr";
import { useForm } from "react-hook-form";
import useSaleRecordStore from "../../../store/useSaleRecordStore";
import { fetchProducts } from "../../../services/product";
const useSaleForm = () => {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=100",
    fetchProducts
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { addSaleRecord, records, changeQuantity } = useSaleRecordStore();

  const handleSaleForm = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;
    const created_at = new Date().toISOString();
    const currentSaleRecord = {
      // id: Date.now()
      product_id: currentProduct.id,
      product: currentProduct,
      quantity: data.quantity,
      cost: currentProduct.price * data.quantity,
      created_at: created_at,
    };
    console.log(currentSaleRecord);
    const isExisted = records.find(
      ({ product: { id } }) => id === currentProductId
    );
    if (isExisted) {
      changeQuantity(isExisted.product_id, data.quantity);
    } else {
      addSaleRecord(currentSaleRecord);
    }
    reset();
  };

  return {
    data,
    error,
    isLoading,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    handleSaleForm,
  };
};
export default useSaleForm;
