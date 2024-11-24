import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import useSWR from "swr";
import { fetchVouchers } from "../../../services/voucher";
import urlToParamsObject from "../../../utils/urlGenerate";
const useVoucherList = () => {
  const location = useLocation();
  const searchRef = useRef();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    if (params.get("q")) {
      searchRef.current.value = params.get("q");
    }
  }, []);
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers${location.search}`
  );
  const { data, error, isLoading } = useSWR(fetchUrl, fetchVouchers);
  console.log(data);

  const RefetchUrl = (url) => {
    console.log(url);
    setParams(urlToParamsObject(url));
    setFetchUrl(url);
  };
  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
    }
  }, 1000);
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
export default useVoucherList;
