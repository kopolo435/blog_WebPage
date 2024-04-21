import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>Home page</p>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
