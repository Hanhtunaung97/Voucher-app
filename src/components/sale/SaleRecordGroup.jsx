import React from "react";
import useSaleRecordStore from "../../store/useSaleRecordStore";
import SaleRecord from "./SaleRecord";
import EmptyListComponent from "../utilities/EmptyListComponent";

const SaleRecordGroup = () => {
  const { saleRecords } = useSaleRecordStore();
  return (
    <>
      {saleRecords.length === 0 && <EmptyListComponent />}
      {saleRecords.map((record,index) => (
        <SaleRecord key={record.id} record={record} index={index} />
      ))}
    </>
  );
};

export default SaleRecordGroup;
