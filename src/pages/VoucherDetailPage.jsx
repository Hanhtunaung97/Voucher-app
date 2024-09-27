import React from "react";
import { BreadCrumbComponent, ContainerComponent, VoucherDetailComponent } from "../components";
const VoucherDetailPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Voucher Detail"
          links={[{ name: "Vouchers", path: "/vouchers" }]}
        />
        <VoucherDetailComponent/>
      </ContainerComponent>
    </section>
  );
};

export default VoucherDetailPage;
