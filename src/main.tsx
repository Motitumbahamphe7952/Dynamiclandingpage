import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import Company from "./components/company/company";
import Service from "./components/service/service";
import Contact from "./components/contactUs/contact";
import Layout from "./components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/home/Carousel";
import CarouselDetails from "./components/home/Carousel-Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/company" element={<Company />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Carousel />} />
      <Route path="/carousel/:id" element={<CarouselDetails />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
