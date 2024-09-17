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
} from "./pages";
import { HeaderComponent } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className="center">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<ProductCreatePage/>}/>
        <Route path="/products/edit/:id" element={<ProductEditPage/>}/>
        <Route path="/sale" element={<SalePage />} />
        <Route path="/vouchers" element={<VoucherPage />} />
        <Route path="/vouchers/:id" element={<VoucherDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster toastOptions={{ duration: 2000, position: "top-right" }} />
    </main>
  );
};

export default App;
