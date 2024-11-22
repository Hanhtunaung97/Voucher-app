import React from "react";
import useSWR from "swr";
import VoucherRowComponent from "./VoucherRowComponent";
import VoucherLoaderComponent from "./VoucherLoaderComponent";
import EmptyListComponent from "../../../components/utilities/EmptyListComponent";
import { fetchVouchers } from "../../../services/voucher";
const VoucherGroupComponent = ({ fetchUrl }) => {
  const { data, isLoading, error } = useSWR(fetchUrl, fetchVouchers);
  return (
    <>
      {isLoading ? (
        <VoucherLoaderComponent />
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
