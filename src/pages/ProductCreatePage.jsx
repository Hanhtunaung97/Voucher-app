import React from "react";
import {
  AddNewProductComponent,
  BreadCrumbComponent,
  ContainerComponent,
} from "../components";

const ProductCreatePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          currentPageTitle="Product Create"
          links={[{ name: "Products", path: "/products" }]}
        />
        <AddNewProductComponent />
      </ContainerComponent>
    </section>
  );
};

export default ProductCreatePage;
