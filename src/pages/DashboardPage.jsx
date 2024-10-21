import React, { useEffect } from "react";
import { ContainerComponent, HeaderComponent } from "../components";
import { Navigate, Outlet } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../store/useUserStore";
const DashboardPage = () => {
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
      <Outlet />
    </ContainerComponent>
  );
};

export default DashboardPage;
