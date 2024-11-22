import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";
const LogoutBtnComponent = () => {
  const nav = useNavigate();
  const handleLogoutBtn = () => {
    removeCookie("my_token");
    removeCookie("user_cookie");
    nav("/");
    toast.success("Logout successfully!");
  };
  return (
    <button
      type="button"
      onClick={handleLogoutBtn}
      className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 transition-all duration-300 active:scale-95 "
    >
      Logout
    </button>
  );
};

export default LogoutBtnComponent;
