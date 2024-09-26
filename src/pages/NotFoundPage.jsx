import React from "react";
import notFound from "../assets/images/notFound.svg";
const NotFoundPage = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen gap-y-5">
      <h1 className=" text-3xl font-bold text-red-500 mb-0 lg:mb-3">
        <span className=" text-blue-700">404</span> NotFound....
        <span className=" inline-block p-2 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700   animate-spin"></span>
      </h1>
      <div>
        <img src={notFound} alt="404_image" width={300} />
      </div>
    </div>
  );
};

export default NotFoundPage;
