import React from "react";
import { BreadCrumbComponent, ContainerComponent, ProductListComponent } from "../components";

const ProductsPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="Products" />
        <ProductListComponent/>
      </ContainerComponent>
    </section>
  );
};

export default ProductsPage;
