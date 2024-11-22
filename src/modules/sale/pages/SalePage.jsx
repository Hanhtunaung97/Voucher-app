import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import SaleVoucherInfo from "../components/SaleVoucherInfo";

const SalePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="Sale" />
        <SaleVoucherInfo />
      </ContainerComponent>
    </section>
  );
};

export default SalePage;
