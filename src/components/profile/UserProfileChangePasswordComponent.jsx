import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { dotSpinner } from "ldrs";
import useCookie from "react-use-cookie";
import { useNavigate } from "react-router-dom";
dotSpinner.register();
const UserProfileChangePasswordComponent = () => {
  const [token] = useCookie("my_token");
  const nav = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const newPassword = watch("new_password");
  const handleChangePassword = async (data) => {
    console.log(data);
    setIsSending(true);
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    console.log(res);
    const json = await res.json();
    console.log(json);
    if (res.status === 200) {
      toast.success(`${json.message}  and login again please!`);
      reset();
      nav("/");
      setIsSending(false);
    } else {
      toast.error(json.message);
      setIsSending(false);
    }
  };
  return (
    <div className=" w-full h-full md:w-2/3 mx-auto p-5 bg-white  rounded-lg shadow">
      <div className="flex justify-center items-center w-full h-full">
        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-[300px]">
            <label
              htmlFor="old_password"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Old Password
            </label>
            <input
              {...register("old_password", {
                required: true,
                minLength: 8,
              })}
              disabled={isSending}
              // defaultValue={name}
              type="password"
              id="old_password"
              className={`${
                errors.name
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="••••••••"
            />
            {errors.old_password?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Old Password is required !
              </p>
            )}
            {errors.old_password?.type === "min" && (
              <p className="text-red-500 mt-2 text-sm">
                Password must be at least 8 letters !
              </p>
            )}
          </div>
          <div className="w-[300px]">
            <label
              htmlFor="new_password"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              New Password
            </label>
            <input
              {...register("new_password", {
                required: true,
                minLength: 8,
              })}
              type="password"
              id="new_password"
              disabled={isSending}
              className={`${
                errors.new_password
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="••••••••"
            />
            {errors.new_password?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                New Password is required !
              </p>
            )}
            {errors.new_password?.type === "minLength" && (
              <p className="text-red-500 mt-2 text-sm">
                New Password must be at least 8 letters !
              </p>
            )}
          </div>
          <div className="w-[300px]">
            <label
              htmlFor="new_password_confirmation"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              {...register("new_password_confirmation", {
                required: true,
                validate: (value) =>
                  value == newPassword || "Passwords do not match",
              })}
              type="password"
              id="new_password_confirmation"
              disabled={isSending}
              className={`${
                errors.new_password_confirmation
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="••••••••"
            />
            {errors.new_password_confirmation?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Please confirm your password !
              </p>
            )}
            {errors.new_password_confirmation?.type === "validate" && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.new_password_confirmation.message}
              </p>
            )}
          </div>
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
                <span>Change</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileChangePasswordComponent;
