
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Duvidas from "./pages/Duvidas";
import Planos from "./pages/Planos";
import Home from "./pages/Home";
import Contato from "./pages/Contato";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
   {
     path: "/duvidas",
     element: <Duvidas />
   },
   {
    path: "/planos",
    element: <Planos />
   },
   {
    path: "/home",
    element: <Home />

   },
   {path: "/contato",
    element: <Contato/>
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);