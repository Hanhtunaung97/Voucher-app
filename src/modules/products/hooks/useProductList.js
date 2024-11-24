import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import useSWR from "swr";
import { fetchProducts } from "../../../services/product";
import urlToParamsObject from "../../../utils/urlGenerate";
const useProductList = () => {
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
  return {
    data,
    error,
    isLoading,
    searchRef,
    handleSearchInput,
    fetchUrl,
    RefetchUrl,
  };
};
export default useProductList;
