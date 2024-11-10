import { createBrowserRouter } from "react-router-dom";
import { CurriculumVitae } from "./views/CurriculumVitae";
import { Home } from "./views/Home";
import { Layout } from "./views/Layout";
import { NotFound } from "./views/NotFound";
import { Portfolio } from "./views/Portfolio";

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
        path: "/curriculumvitae",
        element: <CurriculumVitae></CurriculumVitae>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
    ],
  },
]);
