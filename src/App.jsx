import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  ProductsPage,
  SalePage,
  VoucherDetailPage,
  VoucherPage,
} from "./pages";
import { HeaderComponent } from "./components";

const App = () => {
  return (
    <main className="center">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/vouchers" element={<VoucherPage />} />
        <Route path="/vouchers/:id" element={<VoucherDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;
