import React from "react";
import { useSearchParams } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
const ProductSortingComponent = ({ setFetchUrl, sort_by }) => {
  const [params, setParams] = useSearchParams();
  const handleSortParams = (sortType) => {
    console.log(sortType);
    const sortParams = new URLSearchParams(sortType).toString();
    console.log(sortParams);
    setParams(sortType);
    if (sortParams === "") {
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };
  return (
    <span className="flex items-center flex-col">
      <button
        onClick={handleSortParams.bind(null, {
          sort_by,
          sort_direction: "asc",
        })}
        className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
      >
        <HiChevronUp />
      </button>
      <button
        onClick={handleSortParams.bind(null, {
          sort_by,
          sort_direction: "desc",
        })}
        className="text-slate-600 hover:bg-slate-600 hover:text-white dark:text-slate-400"
      >
        <HiChevronDown />
      </button>
    </span>
  );
};

export default ProductSortingComponent;
