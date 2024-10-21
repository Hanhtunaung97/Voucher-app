import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";
const LogoutBtnComponent = () => {
  const nav = useNavigate();
  const handleLogoutBtn = () => {
    removeCookie("my_token");
    nav("/");
  };
  return (
    <button
      type="button"
      onClick={handleLogoutBtn}
      className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-300 hover:scale-105 "
    >
      Logout
    </button>
  );
};

export default LogoutBtnComponent;
