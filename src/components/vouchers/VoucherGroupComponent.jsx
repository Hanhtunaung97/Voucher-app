import React from "react";
import useSWR from "swr";
import EmptyListComponent from "../utilities/EmptyListComponent";
import VoucherRowComponent from "./VoucherRowComponent";
import SkeletonLoaderVoucherComponent from "../utilities/SkeletonLoaderVoucherComponent";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherGroupComponent = ({fetchUrl}) => {

  const { data, isLoading, error } = useSWR(
    fetchUrl,
    fetcher
  );
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderVoucherComponent/>
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
