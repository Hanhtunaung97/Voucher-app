import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import ProductUpdateComponent from "../components/ProductUpdateComponent";

const ProductEditPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Product Update"
          links={[{ name: "Products", path: "/dashboard/products" }]}
        />
        <ProductUpdateComponent />
      </ContainerComponent>
    </section>
  );
};

export default ProductEditPage;
