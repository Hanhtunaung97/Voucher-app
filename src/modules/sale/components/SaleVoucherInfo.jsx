import React from "react";
import SaleForm from "./SaleForm";
import SaleTable from "./SaleTable";
import SaleVoucherForm from "./SaleVoucherForm";
const SaleVoucherInfo = () => {
  return (
    <div className="grid grid-cols-4 gap-5 pb-10">
      <div className=" col-span-full md:col-span-3">
        <>
          <SaleForm />
          <hr className="h-[1px] border border-blue-100 my-5 " />
          <SaleTable />
        </>
      </div>
      <div className="col-span-full md:col-span-1">
        <SaleVoucherForm />
      </div>
    </div>
  );
};

export default SaleVoucherInfo;
