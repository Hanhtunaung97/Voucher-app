import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
