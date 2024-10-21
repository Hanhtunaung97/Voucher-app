import React from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import useSaleRecordStore from "../../store/useSaleRecordStore";
import useCookie from "react-use-cookie";
const SaleForm = () => {
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=100",
    fetcher
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
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
  return (
    <div className="w-full">
      <form id="recordForm" onSubmit={handleSubmit(handleSaleForm)}>
        <div className="grid grid-cols-5 gap-x-3">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              {...register("product", {
                required: true,
                validate: (value) =>
                  value !== "default" || "Please select a valid category",
              })}
              id="productSelect"
              className={`${
                errors.product
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <option value={"default"}>
                {!errors.product && "Select Product"} {errors.product?.message}
              </option>
              {errors.product?.type === "required" && (
                <option className="text-red-500 mt-2 text-sm">
                  Selection of product is required !
                </option>
              )}
              {!isLoading &&
                data?.data?.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              {...register("quantity", {
                required: true,
                min: 1,
              })}
              type="number"
              id="quantityInput"
              className={`${
                errors.quantity
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="1"
            />
            {errors.quantity?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Product quantity is required !
              </p>
            )}
            {errors.quantity?.type === "minLength" && (
              <p className="text-red-500 mt-2 text-sm">
                Product quantity must be at least 1 !
              </p>
            )}
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="text-blue-700 border border-blue-300 bg-white hover:bg-blue-100   focus:ring focus:outline-none focus:ring-blue-100  rounded-lg text-xs lg:text-sm w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200 h-full font-semibold active:scale-95"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
