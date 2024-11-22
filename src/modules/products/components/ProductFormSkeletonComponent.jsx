import React from "react";

const ProductFormSkeletonComponent = () => {
  return (
    <div className=" animate-pulse w-full">
      <div className="mb-5">
        <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
        <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
      <div className="mb-5">
        <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
        <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
      <div className="flex items-start mb-5">
        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="ms-2 w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
      <div className=" flex items-center gap-x-3 w-1/2">
        <div className="w-full h-10 bg-blue-300 dark:bg-blue-700 rounded" />
        <div className="w-full h-10 bg-blue-300 dark:bg-blue-700 rounded" />
      </div>
    </div>
  );
};

export default ProductFormSkeletonComponent;
