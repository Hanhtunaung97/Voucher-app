import React from "react";
import useSWR from "swr";
import SkeletonLoaderComponent from "../utilities/SkeletonLoaderComponent";
import EmptyListComponent from "../utilities/EmptyListComponent";
import VoucherRowComponent from "./VoucherRowComponent";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherGroupComponent = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers",
    fetcher
  );
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderComponent />
      ) : (
        <>
          {data.length === 0 && <EmptyListComponent />}
          {data.map((voucher, index) => (
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
