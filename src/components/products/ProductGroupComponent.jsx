import React from "react";
import useSWR from "swr";
import SkeletonLoaderComponent from "../utilities/SkeletonLoaderComponent";
import EmptyListComponent from "../utilities/EmptyListComponent";
import ProductRowComponent from "./ProductRowComponent";
import useCookie from "react-use-cookie";
const ProductGroupComponent = ({ fetchUrl }) => {
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  //  console.log(data);
  return (
    <>
      {isLoading ? (
        <SkeletonLoaderComponent />
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
