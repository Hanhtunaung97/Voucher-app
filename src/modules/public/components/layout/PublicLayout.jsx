import React, { Suspense } from "react";
import HeaderComponent from "../nav/HeaderComponent";
import FooterComponent from "../nav/FooterComponent";
import { Outlet } from "react-router-dom";
import { PageLoadingComponent } from "../../../../components";

const PublicLayout = () => {
  return (
    <main className="center">
      <HeaderComponent />
      <Suspense fallback={<PageLoadingComponent />}>
        <Outlet />
      </Suspense>
      <FooterComponent />
    </main>
  );
};

export default PublicLayout;
