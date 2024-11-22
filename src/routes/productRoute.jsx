import { lazy } from "react";

const ProductCreatePage = lazy(() =>
  import("../modules/products/pages/ProductCreatePage")
);
const ProductEditPage = lazy(() =>
  import("../modules/products/pages/ProductEditPage")
);
const ProductsPage = lazy(() =>
  import("../modules/products/pages/ProductsPage")
);

const productRoute = [
  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "products/create",
    element: <ProductCreatePage />,
  },
  {
    path: "products/edit/:id",
    element: <ProductEditPage />,
  },
];
export default productRoute;
