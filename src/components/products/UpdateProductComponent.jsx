import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { dotSpinner } from "ldrs";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useSWR from "swr";
import SkeletonFormComponent from "./SkeletonFormComponent";
import useCookie from "react-use-cookie";
const UpdateProductComponent = () => {
  const { id } = useParams();
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  dotSpinner.register();
  const handleUpdateForm = async (data) => {
    console.log(data);
    data.created_at = new Date().toISOString();
    const updatedProduct = {
      product_name: data.product_name,
      price: data.price,
      created_at: data.created_at,
    };
    setIsSending(true);
    const res = await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedProduct),
    });
    console.log(res);
    const json = await res.json();
    console.log(json);
    if (res.status == 200) {
      setIsSending(false);
      if (data.correct_check) {
        nav("/dashboard/products");
      }
      toast.success(`${data.product_name} product updated successfully`);
      reset();
    } else {
      setIsSending(false);
      toast.error(json.message);
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
          <SkeletonFormComponent />
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
                  disabled={isSending}
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
                  disabled={isSending}
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
                    disabled={isSending}
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
                  disabled={isSending}
                  className="text-white disabled:opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
                >
                  {isSending ? (
                    <>
                      <div className="flex items-center justify-center gap-x-3">
                        <span>Updating</span>
                        <l-dot-spinner
                          size="16"
                          speed="0.9"
                          color="white"
                        ></l-dot-spinner>
                      </div>
                    </>
                  ) : (
                    <>
                      <span>Update</span>
                    </>
                  )}
                </button>
                <Link
                  to={"/dashboard/products"}
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

export default UpdateProductComponent;
