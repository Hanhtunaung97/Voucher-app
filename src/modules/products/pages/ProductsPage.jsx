import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import ProductListComponent from "../components/ProductListComponent";
const ProductsPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="Products" />
        <ProductListComponent />
      </ContainerComponent>
    </section>
  );
};

export default ProductsPage;
