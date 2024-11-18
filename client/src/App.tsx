import { RouterProvider } from "react-router-dom";
import "./App.css";
import { IProject } from "./models/IProject";
import { get } from "./services/serviceBase";
import { router } from "./Router";
import { PortfolioContext } from "./contexts/PortfolioContext";
import { useEffect, useReducer, useState } from "react";
import { themes } from "./models/Theme";
import { ActionType, ThemeReducer } from "./reducers/ThemeReducer";
import { ThemeContext } from "styled-components";

function App() {
  const root = document.documentElement;

  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light").matches
  );
  const [theme, dispatch] = useReducer(ThemeReducer, themes.light);

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

    if (isDarkTheme) {
      dispatch({ type: ActionType.TOGGLED, payload: themes.light });
    }
    if (!isDarkTheme) {
      dispatch({ type: ActionType.TOGGLED, payload: themes.dark });
    }
    root.style.backgroundColor = theme.backgroundColor;
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    return theme.name === themes.light.name
      ? dispatch({ type: ActionType.TOGGLED, payload: themes.dark })
      : dispatch({ type: ActionType.TOGGLED, payload: themes.light });
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <PortfolioContext.Provider value={{ projects: projects }}>
          <RouterProvider router={router}></RouterProvider>
        </PortfolioContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
