import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import VoucherListComponent from "../components/VoucherListComponent";

const VoucherPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="Vouchers" />
        <VoucherListComponent />
      </ContainerComponent>
    </section>
  );
};

export default VoucherPage;
