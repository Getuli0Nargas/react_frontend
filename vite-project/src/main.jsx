
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Duvidas from "./pages/Duvidas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
   {
     path: "/duvidas",
     element: <Duvidas />
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);