import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import VoucherDetailComponent from "../components/VoucherDetailComponent";

const VoucherDetailPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Voucher Detail"
          links={[{ name: "Vouchers", path: "/dashboard/vouchers" }]}
        />
        <VoucherDetailComponent />
      </ContainerComponent>
    </section>
  );
};

export default VoucherDetailPage;
