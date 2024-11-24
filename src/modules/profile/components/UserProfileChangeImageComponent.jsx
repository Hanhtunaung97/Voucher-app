import React from "react";
import userProfile from "../../../assets/images/userProfile.png";
import BtnSpinnerComponent from "../../../components/utilities/BtnSpinnerComponent";
import { LuCamera } from "react-icons/lu";
import useChangeImage from "../hooks/useProfileChangeImage";

const UserProfileChangeImageComponent = () => {
  const {
    handleChangeProfileBtn,
    handleChangeImage,
    isSending,
    profile_image,
    inputRef,
  } = useChangeImage();

  return (
    <div className="  grid grid-cols-1 md:grid-cols-2  pt-10">
      <div className="col-span-full  flex flex-col gap-5 justify-center items-center w-full h-full  mx-auto p-10 bg-white  rounded-lg shadow drop-shadow">
        <div className="text-white opacity-75 bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:focus:ring-blue-800 duration-200 mb-10 shadow">
          {isSending ? (
            <>
              <div className="flex items-center justify-center gap-x-3">
                <span>Uploading</span>
                <BtnSpinnerComponent />
              </div>
            </>
          ) : (
            <>
              <span>Profile Photo</span>
            </>
          )}
        </div>
        <div className="relative">
          <img
            disabled={isSending}
            className="size-32 object-contain object-top rounded-lg disabled:opacity-75 disabled:pointer-events-none"
            src={profile_image ? profile_image : userProfile}
            alt="Profile Image"
          />
          <button
            disabled={isSending}
            type="button"
            onClick={handleChangeProfileBtn}
            className="group disabled:opacity-75 disabled:pointer-events-none absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2 transition duration-200 size-6 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-full hover:bg-blue-50 hover:text-blue-700 focus:z-10 focus:border-0 focus:ring-2 focus:ring-blue-200 focus:text-blue-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-blue-500 dark:focus:text-white shadow"
          >
            <LuCamera className="group-hover:text-blue-700 w-3 h-3" />
          </button>
        </div>
        <input
          onChange={handleChangeImage}
          ref={inputRef}
          className=" hidden w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="profile_image"
          type="file"
        />
      </div>
    </div>
  );
};

export default UserProfileChangeImageComponent;
