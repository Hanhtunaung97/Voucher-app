import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import ProductTableComponent from "./ProductTableComponent";
import PaginationComponent from "../../../components/utilities/PaginationComponent";
import useSWR from "swr";
import { LuPlusCircle, LuSearch } from "react-icons/lu";
import { fetchProducts } from "../../../services/product";
import urlToParamsObject from "../../../utils/urlGenerate";
const ProductListComponent = () => {
  const searchRef = useRef();
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/products${location.search}`
  );
  const { data, error, isLoading } = useSWR(fetchUrl, fetchProducts);
  useEffect(() => {
    if (params.get("q")) {
      searchRef.current.value = params.get("q");
    }
  }, []);
  const RefetchUrl = (url) => {
    console.log(url);
    setParams(urlToParamsObject(url));
    setFetchUrl(url);
  };
  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, 500);
  return (
    <div className="w-full pb-5">
      {/* Search and Add */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <LuSearch className="w-4 h-4 text-blue-500 dark:text-slate-400" />
          </div>
          <input
            ref={searchRef}
            type="search"
            onChange={handleSearchInput}
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product"
          />
        </div>
        <Link
          to={"/dashboard/products/create"}
          className="text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2"
        >
          Add New Product
          <LuPlusCircle className="w-4 h-4 text-white " />
        </Link>
      </div>
      {/* Product Table */}
      <ProductTableComponent fetchUrl={fetchUrl} setFetchUrl={RefetchUrl} />
      {
        <PaginationComponent
          links={data?.links}
          meta={data?.meta}
          RefetchUrl={RefetchUrl}
        />
      }
    </div>
  );
};

export default ProductListComponent;
