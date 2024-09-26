import React from "react";
import useSWR from "swr";
import SkeletonLoaderComponent from "../utilities/SkeletonLoaderComponent";
import EmptyListComponent from "../utilities/EmptyListComponent";
import ProductRowComponent from "./ProductRowComponent";
const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductGroupComponent = () => {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderComponent />
      ) : (
        <>
          {data.length === 0 ? (
            <EmptyListComponent />
          ) : (
            data.map((el) => <ProductRowComponent key={el.id} product={el} />)
          )}
        </>
      )}
    </>
  );
};

export default ProductGroupComponent;
