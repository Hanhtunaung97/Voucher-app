import React from "react";
import useSWR from "swr";
import ProductRowComponent from "./ProductRowComponent";
import { EmptyListComponent } from "../../../components";
import { fetchProducts } from "../../../services/product";
import ProductLoaderComponent from "./ProductLoaderComponent";
const ProductGroupComponent = ({ fetchUrl }) => {
  const { data, error, isLoading } = useSWR(fetchUrl, fetchProducts);
  //  console.log(data);
  return (
    <>
      {isLoading ? (
        <ProductLoaderComponent />
      ) : (
        <>
          {data?.data?.length === 0 ? (
            <EmptyListComponent />
          ) : (
            data?.data?.map((el) => (
              <ProductRowComponent key={el.id} product={el} />
            ))
          )}
        </>
      )}
    </>
  );
};

export default ProductGroupComponent;
