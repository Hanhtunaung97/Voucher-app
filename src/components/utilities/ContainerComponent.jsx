import React from "react";

const ContainerComponent = ({ children, className }) => {
  return <div className={` ${className} container mx-auto px-5 lg:px-0 `}>{children}</div>;
};

export default ContainerComponent;
