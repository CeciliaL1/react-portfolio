import { RouterProvider } from "react-router-dom";
import "./App.css";
import { IProject } from "./models/IProject";
import { get } from "./services/serviceBase";
import { router } from "./Router";
import { PortfolioContext } from "./contexts/PortfolioContext";
import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await get<IProject[]>("http://localhost:3000/portfolio");
      setProjects(projects);
      setIsFetched(true);
    };

    if (!isFetched) {
      getProjects();
    }
  });

  return (
    <>
      <PortfolioContext.Provider value={{ projects: projects }}>
        <RouterProvider router={router}></RouterProvider>
      </PortfolioContext.Provider>
    </>
  );
}

export default App;
