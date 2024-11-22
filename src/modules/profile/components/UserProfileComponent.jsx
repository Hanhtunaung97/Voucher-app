import React from "react";
import useCookie from "react-use-cookie";
import userProfile from "../../../assets/images/userProfile.png";
import { Link } from "react-router-dom";
import { LuLock, LuPenSquare } from "react-icons/lu";
const UserProfileComponent = () => {
  const [userCookie] = useCookie("user_cookie");
  const { name, email, profile_image } = JSON.parse(userCookie);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  pt-10">
      <div className=" col-span-full  mx-auto flex flex-col items-center gap-5 justify-center p-10 bg-white  rounded-lg drop-shadow shadow h-full">
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <img
              className="size-32 object-contain object-top rounded-lg"
              src={profile_image ? profile_image : userProfile}
              alt="Profile Image"
            />
            <Link
              to="/dashboard/user-profile/change-image"
              className="group absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transition duration-200 size-6 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-full hover:bg-blue-50 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <LuPenSquare className="group-hover:text-blue-700 w-3 h-3" />
            </Link>
          </div>

          <div className="flex flex-col items-center font-heading">
            <span className="mb-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-500 dark:bg-blue-900 dark:text-blue-300">
              {" "}
              Account Name{" "}
            </span>
            <div className="flex items-center gap-3">
              <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
                {name}
              </h2>
              <Link
                to="/dashboard/user-profile/change-name"
                className="group duration-200 size-8 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-full hover:bg-blue-50 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <LuPenSquare className="group-hover:text-blue-700 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="font-semibold text-gray-900 dark:text-white">
            Email Address
          </p>
          <p className="text-gray-500 dark:text-gray-400">{email}</p>
        </div>
        <div>
          <Link
            to="/dashboard/user-profile/change-password"
            className="inline-flex w-auto items-center gap-3 justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            <LuLock />
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
