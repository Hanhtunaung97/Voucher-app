import React from "react";
import useSaleRecordStore from "../../store/useSaleRecordStore";
import SaleRecord from "./SaleRecord";
import EmptyListComponent from "../utilities/EmptyListComponent";

const SaleRecordGroup = () => {
  const { records } = useSaleRecordStore();
  return (
    <>
      {records.length === 0 && <EmptyListComponent />}
      {records.map((record,index) => (
        <SaleRecord key={record.product.id} record={record} index={index} />
      ))}
    </>
  );
};

export default SaleRecordGroup;
