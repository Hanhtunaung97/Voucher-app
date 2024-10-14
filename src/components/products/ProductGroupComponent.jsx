import React from "react";
import useSWR from "swr";
import SkeletonLoaderComponent from "../utilities/SkeletonLoaderComponent";
import EmptyListComponent from "../utilities/EmptyListComponent";
import ProductRowComponent from "./ProductRowComponent";
const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductGroupComponent = ({ fetchUrl }) => {
  // console.log(search);
  const { data, error, isLoading } = useSWR(
    fetchUrl,
    fetcher
  )
   console.log(data);
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderComponent />
      ) : (
        <>
          {data?.data?.length === 0 ? (
            <EmptyListComponent />
          ) : (
            data?.data?.map((el) => <ProductRowComponent key={el.id} product={el} />)
          )}
        </>
      )}
    </>
  );
};

export default ProductGroupComponent;
