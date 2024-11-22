import { Suspense } from "react";
import { lazy } from "react";
import { PageLoadingComponent } from "../components";

const LoginPage = lazy(() => import("../modules/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("../modules/auth/pages/RegisterPage"));

const authRoute = [
  {
    path: "/login",
    element: (
      <Suspense fallback={<PageLoadingComponent />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<PageLoadingComponent />}>
        <RegisterPage />
      </Suspense>
    ),
  },
];
export default authRoute;
