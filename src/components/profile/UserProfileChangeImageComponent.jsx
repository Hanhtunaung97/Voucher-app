import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import userProfile from "../../assets/images/userProfile.png";
import toast from "react-hot-toast";
import { dotSpinner } from "ldrs";
import useCookie from "react-use-cookie";
import useUserStore from "../../store/useUserStore";
import { HiCamera } from "react-icons/hi2";
dotSpinner.register();
const UserProfileChangeImageComponent = () => {
  const inputRef = useRef();
  const [token] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user_cookie");
  const {
    user: { profile_image },
    setUser,
  } = useUserStore();
  const [isSending, setIsSending] = useState(false);
  const handleChangeProfileBtn = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };
  const handleChangeImage = async (event) => {
    console.log(event.target.files);
    const data = event.target.files[0];
    const formData = new FormData();
    formData.append("profile_image", data);
    setIsSending(true);
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    const json = await res.json();
    console.log(json);
    if (res.status === 200) {
      toast.success(`${json.user.name} profile image is changed successfully`);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      setIsSending(false);
    } else {
      toast.error(json.message);
      setIsSending(false);
    }
  };
  return (
    <div className=" w-full h-full lg:w-2/3 mx-auto p-5 bg-white  rounded-lg shadow">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-white opacity-75 bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:focus:ring-blue-800 duration-200 mb-10 shadow">
          {isSending ? (
            <>
              <div className="flex items-center justify-center gap-x-3">
                <span>Uploading</span>
                <l-dot-spinner
                  size="16"
                  speed="0.9"
                  color="white"
                ></l-dot-spinner>
              </div>
            </>
          ) : (
            <>
              <span>Upload Profile Photo</span>
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
            <HiCamera className="group-hover:text-blue-700 w-3 h-3" />
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
