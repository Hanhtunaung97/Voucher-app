import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../modules/public/components/layout/PublicLayout";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import { NotFoundPage } from "../pages";
import dashboardRoute from "./dashboardRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [...publicRoute],
  },
  ...authRoute,
  ...dashboardRoute,
]);
export default router;
