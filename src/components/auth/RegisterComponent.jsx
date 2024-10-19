import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mms from "../../assets/images/mms.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const RegisterComponent = () => {
  const nav = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password");
  const handleRegisterForm = async (data) => {
    console.log(data);
    setIsSending(true);
    const res = await fetch(import.meta.env.VITE_API_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log(json);
    if (res.status === 200) {
      toast.success(`${json.user.name} is registered successfully!`);
      reset();
      setIsSending(false);
      nav("/");
    } else {
      toast.error(json.message);
      setIsSending(false);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={mms} alt="logo" />
          MMS Software
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleRegisterForm)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 50,
                  })}
                  type="text"
                  id="name"
                  disabled={isSending}
                  className={`${
                    errors.name
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Han Htun Aung"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Name is required !
                  </p>
                )}
                {errors.name?.type === "minLength" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Name must be at least 3 letters !
                  </p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Name must not be at more than 50 letters !
                  </p>
                )}
              </div>
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
                  disabled={isSending}
                  className={`${
                    errors.email
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Han123@gmail.com"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Email is required !
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Invalid email address !
                  </p>
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
                  disabled={isSending}
                  className={`${
                    errors.password
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="••••••••"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Password is required !
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Password must be at least 8 letters !
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  {...register("password_confirmation", {
                    required: true,
                    validate: (value) =>
                      value == password || "Passwords do not match",
                  })}
                  type="password"
                  id="password_confirmation"
                  disabled={isSending}
                  className={`${
                    errors.password_confirmation
                      ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                      : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
                  } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="••••••••"
                />
                {errors.password_confirmation?.type === "required" && (
                  <p className="text-red-500 mt-2 text-sm">
                    Please confirm your password !
                  </p>
                )}
                {errors.password_confirmation?.type === "validate" && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>
              <div className="flex items-start" disabled={isSending}>
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 disabled:opacity-75 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light disabled:opacity-75 text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium disabled:opacity-75 text-blue-500 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full text-white disabled:opacity-50 disabled:pointer-events-none bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p
                disabled={isSending}
                className="text-sm font-light disabled:opacity-50 disabled:pointer-events-none text-gray-500 dark:text-gray-400"
              >
                Already have an account?{" "}
                <Link
                  to={"/"}
                  className="font-medium text-blue-500 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
