import React from "react";
import { BreadCrumbComponent, ContainerComponent, VoucherListComponent } from "../components";


const VoucherPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="Vouchers" />
        <VoucherListComponent/>
      </ContainerComponent>
    </section>
  );
};

export default VoucherPage;
