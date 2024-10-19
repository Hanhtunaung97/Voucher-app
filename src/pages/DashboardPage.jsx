import React from "react";
import { ContainerComponent, HeaderComponent } from "../components";
import { Outlet } from "react-router-dom";


const DashboardPage = () => {
  return (
    <ContainerComponent>
      <HeaderComponent />
      <Outlet/>
    </ContainerComponent>
  );
};

export default DashboardPage;
