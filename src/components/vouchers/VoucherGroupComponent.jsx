import React from "react";
import useSWR from "swr";
import EmptyListComponent from "../utilities/EmptyListComponent";
import VoucherRowComponent from "./VoucherRowComponent";
import SkeletonLoaderVoucherComponent from "../utilities/SkeletonLoaderVoucherComponent";
import useCookie from "react-use-cookie";
const VoucherGroupComponent = ({ fetchUrl }) => {
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderVoucherComponent />
      ) : (
        <>
          {data?.data?.length === 0 && <EmptyListComponent />}
          {data?.data?.map((voucher, index) => (
            <VoucherRowComponent
              key={voucher.id}
              voucher={voucher}
              index={index}
            />
          ))}
        </>
      )}
    </>
  );
};

export default VoucherGroupComponent;
