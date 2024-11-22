import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
import BtnSpinnerComponent from "../../../components/utilities/BtnSpinnerComponent";
import { updateName } from "../../../services/profile";
import { useNavigate } from "react-router-dom";
const UserProfileChangeNameComponent = () => {
  const nav = useNavigate();
  const [userCookie, setUserCookie] = useCookie("user_cookie");
  const {
    user: { name },
    setUser,
  } = useUserStore();
  // console.log(userCookie);
  // const { name } = JSON.parse(userCookie);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();
  const handleChangeName = async (data) => {
    // console.log(data);
    try {
      const res = await updateName(data);
      const json = await res.json();
      // console.log(json);
      if (res.status === 200) {
        toast.success(`${json.user.name} name is changed successfully`);
        setUserCookie(JSON.stringify(json.user));
        setUser(json.user);
        reset();
        nav("/dashboard");
      } else {
        toast.error(json.message);
        throw new Error(json.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  pt-10 ">
      <div className="col-span-full flex justify-center items-center  h-full mx-auto p-10 bg-white  rounded-lg shadow drop-shadow">
        <form
          onSubmit={handleSubmit(handleChangeName)}
          className="flex items-end gap-3"
        >
          <div className="w-[300px]">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
            >
              Update Your Name
            </label>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              disabled={isSubmitting}
              // defaultValue={name}
              type="text"
              id="text"
              className={`${
                errors.name
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Update Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">Name is required !</p>
            )}
            {errors.name?.type === "min" && (
              <p className="text-red-500 mt-2 text-sm">
                Name must be at least 3 letters !
              </p>
            )}
            {errors.name?.type === "max" && (
              <p className="text-red-500 mt-2 text-sm">
                Name must not be at more than 20 letters !
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
                <span>Update</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileChangeNameComponent;