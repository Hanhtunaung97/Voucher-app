import React from "react";
import notFound from "../assets/images/notFound.svg";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen gap-y-5">
      <h1 className=" text-3xl font-bold text-red-500 mb-0 lg:mb-3">
        <span className=" text-blue-700">404</span> NotFound....
        <span className=" inline-block p-2 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700   animate-spin"></span>
      </h1>
      <div className="flex flex-col gap-3 items-center">
        <img src={notFound} alt="404_image" width={300} />
        <Link
          to="/"
          className="bg-yellow-400 w-auto rounded-lg p-3 text-white font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-95 hover:-translate-y-0.5"
        >
          {" "}
          Back to HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
