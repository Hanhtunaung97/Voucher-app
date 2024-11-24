import React from "react";
import { Link } from "react-router-dom";
import { BtnSpinnerComponent } from "../../../components";
import useLogin from "../hooks/useLogin";

const LoginComponent = () => {
  const { handleSubmit, handleLoginForm, isSubmitting, errors, register } =
    useLogin();
  return (
    <>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(handleLoginForm)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              },
            })}
            type="email"
            id="email"
            disabled={isSubmitting}
            className={`${
              errors.email
                ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
            } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Han123@gmail.com"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 mt-2 text-sm">Email is required !</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500 mt-2 text-sm">Invalid email address !</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="password"
            id="password"
            disabled={isSubmitting}
            className={`${
              errors.password
                ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
            } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="••••••••"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 mt-2 text-sm">Password is required !</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 mt-2 text-sm">
              Password must be at least 8 letters !
            </p>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          disabled={isSubmitting}
        >
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 disabled:opacity-75 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="disabled:opacity-75 text-sm font-medium text-blue-500 hover:underline dark:text-blue-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full disabled:opacity-50 disabled:pointer-events-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          {isSubmitting ? (
            <>
              <div className="flex items-center justify-center gap-x-3">
                <span>Logging In</span>
                <BtnSpinnerComponent />
              </div>
            </>
          ) : (
            <>
              <span>Sign in</span>
            </>
          )}
        </button>
        <p
          disabled={isSubmitting}
          className="text-sm disabled:opacity-75 font-light text-gray-500 dark:text-gray-400"
        >
          Don’t have an account yet?{" "}
          <Link
            to={"/register"}
            className="font-medium text-blue-500 hover:underline dark:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginComponent;
