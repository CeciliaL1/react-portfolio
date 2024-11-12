import { createBrowserRouter } from "react-router-dom";

import { Home } from "./views/Home";
import { Layout } from "./views/Layout";
import { NotFound } from "./views/NotFound";
import { Portfolio } from "./views/Portfolio";
import { Contact } from "./views/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
