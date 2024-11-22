import React, { Suspense } from "react";
import { ContainerComponent, PageLoadingComponent } from "../../../components";
import { Outlet } from "react-router-dom";

const UserProfileLayOut = () => {
  return (
    <ContainerComponent>
      <Suspense fallback={<PageLoadingComponent />}>
        <Outlet />
      </Suspense>
    </ContainerComponent>
  );
};

export default UserProfileLayOut;
