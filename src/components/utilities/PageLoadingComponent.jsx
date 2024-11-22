import React from "react";

const PageLoadingComponent = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0">
        <div className="h-1 w-full bg-blue-100 overflow-hidden">
          <div className="animate-progressBar w-full h-full bg-blue-500 origin-left-right" />
        </div>
      </div>

      <div className="flex justify-center flex-col items-center min-h-screen gap-y-5">
        <h1 className=" text-xl font-bold text-red-500 flex items-center">
          <span className=" text-blue-700">Loading...</span>
          <span className=" inline-block p-1 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700  animate-spin"></span>
        </h1>
      </div>
    </>
  );
};

export default PageLoadingComponent;
