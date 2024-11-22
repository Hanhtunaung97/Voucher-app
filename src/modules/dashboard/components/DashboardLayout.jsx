import React, { Suspense, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useCookie from "react-use-cookie";
import { ContainerComponent, PageLoadingComponent } from "../../../components";
import HeaderComponent from "./HeaderComponent";
import { Toaster } from "react-hot-toast";
import useUserStore from "../../../store/useUserStore";
const DashboardLayout = () => {
  const [token] = useCookie("my_token");
  const [userCookie] = useCookie("user_cookie");
  const { setUser } = useUserStore();
  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, [userCookie, setUser]);
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return (
    <ContainerComponent className={`flex flex-col min-h-screen`}>
      <HeaderComponent />
      <Suspense fallback={<PageLoadingComponent />}>
        <Outlet />
      </Suspense>
      <Toaster toastOptions={{ duration: 3000, position: "top-right" }} />
    </ContainerComponent>
  );
};

export default DashboardLayout;
