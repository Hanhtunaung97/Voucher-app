import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import ProductCreateComponent from "../components/ProductCreateComponent";

const ProductCreatePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Product Create"
          links={[{ name: "Products", path: "/dashboard/products" }]}
        />
        <ProductCreateComponent />
      </ContainerComponent>
    </section>
  );
};

export default ProductCreatePage;
