import { lazy } from "react";

const VoucherPage = lazy(() => import("../modules/vouchers/pages/VoucherPage"));
const VoucherDetailPage = lazy(() =>
  import("../modules/vouchers/pages/VoucherDetailPage")
);

const voucherRoute = [
  {
    path: "vouchers",
    element: <VoucherPage />,
  },
  {
    path: "vouchers/detail/:id",
    element: <VoucherDetailPage />,
  },
];
export default voucherRoute;
