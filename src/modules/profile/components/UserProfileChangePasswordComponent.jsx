import React from "react";
import BtnSpinnerComponent from "../../../components/utilities/BtnSpinnerComponent";
import useChangePassword from "../hooks/useProfileChangePassword";
const UserProfileChangePasswordComponent = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    newPassword,
    handleChangePassword,
  } = useChangePassword();
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  pt-10">
      <div className="col-span-full flex justify-center items-center  h-full mx-auto p-10 bg-white  rounded-lg shadow drop-shadow">
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
