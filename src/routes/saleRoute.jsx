import { lazy } from "react";

const SalePage = lazy(() => import("../modules/sale/pages/SalePage"));

const saleRoute = [
  {
    path: "sale",
    element: <SalePage />,
  },
];
export default saleRoute;
