import React from "react";
import { lazy } from "react";

const HomePage = lazy(() => import("../modules/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../modules/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../modules/public/pages/ContactUsPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
];
export default publicRoute;
