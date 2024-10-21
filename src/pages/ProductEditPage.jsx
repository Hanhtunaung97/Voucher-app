import React from "react";
import {
  BreadCrumbComponent,
  ContainerComponent,
  UpdateProductComponent,
} from "../components";
const ProductEditPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Product Update"
          links={[{ name: "Products", path: "/dashboard/products" }]}
        />
        <UpdateProductComponent />
      </ContainerComponent>
    </section>
  );
};

export default ProductEditPage;
