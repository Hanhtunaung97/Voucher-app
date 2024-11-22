import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useSWR, { useSWRConfig } from "swr";
import { editProduct, fetchProducts } from "../../../services/product";
import ProductFormSkeletonComponent from "./ProductFormSkeletonComponent";
import { BtnSpinnerComponent } from "../../../components";

const ProductUpdateComponent = () => {
  const nav = useNavigate();
  const { id } = useParams();
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
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2 border border-slate-200 rounded-lg p-5 shadow-md flex flex-col gap-y-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-heading font-bold text-center text-slate-900">
            Update Product
          </h1>
          <p className="text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.provident
            amet omnis modi sapiente nulla, unde aperiam possimus minima dicta
            exercitationem ad eum incidunt!
          </p>
        </div>
        {isLoading ? (
          <ProductFormSkeletonComponent />
        ) : (
          <>
            <form onSubmit={handleSubmit(handleUpdateForm)}>
              <div className="mb-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  {...register("product_name", {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                  })}
                  disabled={isSubmitting}
                  defaultValue={data?.data?.product_name}
                  type="text"
                  id="text"
                  className={`${
                    errors.product_name
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="I Phone 16 pro max"
                />
                {errors.product_name?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product price is required !
                  </p>
                )}
                {errors.product_name?.type === "min" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product price must be at least 1 dollar !
                  </p>
                )}
                {errors.product_name?.type === "max" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product price must not be at more than 10000 dollars !
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  {...register("price", {
                    required: true,
                    min: 1,
                    max: 10000,
                  })}
                  disabled={isSubmitting}
                  defaultValue={data?.data?.price}
                  type="number"
                  id="price"
                  className={`${
                    errors.price
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="995.99"
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product Name is required !
                  </p>
                )}
                {errors.price?.type === "minLength" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product Name must be at least 3 !
                  </p>
                )}
                {errors.price?.type === "maxLength" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Product Name must not be at more than 20 !
                  </p>
                )}
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    {...register("correct_check", { required: true })}
                    id="correct_check"
                    type="checkbox"
                    defaultValue
                    className={`${
                      errors.correct_check &&
                      " border border-red-300 focus:ring-3 focus:ring-red-500 bg-white"
                    } disabled:opacity-75 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800`}
                  />
                  {errors.correct_check?.type === "required" && (
                    <p className="text-red-500 ms-2 text-sm">
                      Correct check is required !
                    </p>
                  )}
                </div>
                <label
                  htmlFor="correct_check"
                  className={`${
                    errors.correct_check && "hidden"
                  } ms-2 text-sm font-medium text-slate-500 dark:text-slate-300`}
                >
                  Every Field is Correct.
                </label>
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="flex items-center justify-center gap-x-3">
                        <span>Updating</span>
                        <BtnSpinnerComponent />
                      </div>
                    </>
                  ) : (
                    <>
                      <span>Update</span>
                    </>
                  )}
                </button>
                <Link
                  disabled={isSubmitting}
                  to={`/dashboard/products`}
                  type="button"
                  className="text-blue-700 border border-blue-200 bg-white hover:bg-blue-100   focus:ring focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductUpdateComponent;
