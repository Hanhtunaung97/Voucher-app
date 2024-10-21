import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  ProductCreatePage,
  ProductEditPage,
  ProductsPage,
  SalePage,
  VoucherDetailPage,
  VoucherPage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  UserProfilePage,
  UserProfileChangeNamePage,
  UserProfileChangeImagePage,
  UserProfileChangePasswordPage,
} from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className="center">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/create" element={<ProductCreatePage />} />
          <Route path="products/edit/:id" element={<ProductEditPage />} />
          <Route path="sale" element={<SalePage />} />
          <Route path="vouchers" element={<VoucherPage />} />
          <Route path="vouchers/:id" element={<VoucherDetailPage />} />
          <Route path="user-profile" element={<UserProfilePage />} />
          <Route
            path="user-profile/change-name"
            element={<UserProfileChangeNamePage />}
          />
          <Route
            path="user-profile/change-image"
            element={<UserProfileChangeImagePage />}
          />
          <Route
            path="user-profile/change-password"
            element={<UserProfileChangePasswordPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000, position: "top-right" }} />
    </main>
  );
};

export default App;
