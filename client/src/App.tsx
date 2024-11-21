import { RouterProvider } from "react-router-dom";
import "./App.css";
//import { IProject } from "./models/IProject";
//import { get } from "./services/serviceBase";
import { router } from "./Router";
import { PortfolioContext } from "./contexts/PortfolioContext";
import { useEffect, useReducer, useState } from "react";
import { themes } from "./models/Theme";
import { ActionType, ThemeReducer } from "./reducers/ThemeReducer";
import { ThemeContext } from "styled-components";
import { ThemeDispatch } from "./contexts/ThemeDispatch";

function App() {
  const projects = [
    {
      id: 1,
      projectName: "To The Moon",
      projectDesc: "A one pager from the course HTML/CSS.",
      tools: "HTML, CSS",
      deployed: 1,
      link: "https://cecilial1.github.io/Kundprojekt/",
    },
    {
      id: 2,
      projectName: "Webshop",
      projectDesc: "A Fictiv webbshop in the course JavaScript Basics",
      tools: "JavaScript, HTML, CSS",
      deployed: 1,
      link: "https://cecilial1.github.io/Gottfrids-Munkar/",
    },
    {
      id: 3,
      projectName: "Unittesting",
      projectDesc: "Applied unittesting in provided code",
      tools: "Jest, Javascript",
      deployed: 0,
      link: "https://github.com/CeciliaL1/unittesting-assignment",
    },
    {
      id: 4,
      projectName: "GridPainter",
      projectDesc:
        "A gridpainter game where you get a preview on a image and then paint and chat in real-time. Implemented with socket.io",
      tools: "Node.js, JavaScript, Socket.io, MySQL, Express.js, HTML, SCSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/gridpainter",
    },
    {
      id: 5,
      projectName: "Todo app",
      projectDesc: "A todo app that handles the CRUD-operations using vue.js",
      tools: "Vue.js, TypeScript, HTML, CSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/todo-app",
    },
    {
      id: 6,
      projectName: "Phobia Quiz",
      projectDesc: "A quiz about phobias from the course JavaScript Bascis.",
      tools: "TypeScript, HTML, SCSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/PhobiaQuiz",
    },
    {
      id: 7,
      projectName: "Interactive rating",
      projectDesc: "Rating component made with Frontend Mentor",
      tools: "JavaScript, HTML, SCSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/interactive-rating-component",
    },
    {
      id: 8,
      projectName: "Advice generator",
      projectDesc:
        "Generates random advice from API using vue.js. Done with Frontend Mentor",
      tools: "Vue.js, TypeScript, HTML, CSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/advice-generator",
    },
    {
      id: 9,
      projectName: "Tic Tac Toe",
      projectDesc:
        "A tic tac toe game, created for the course JavaScript Advanced",
      tools: "Vue.js, TypeScript, HTML, CSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/vue-tic-tac-toe",
    },
    {
      id: 10,
      projectName: "The Zoo",
      projectDesc:
        "A pet zoo where you take care of the animals and get updates on start page if they are hungry. ",
      tools: "React.js, TypeScript, HTML, CSS",
      deployed: 0,
      link: "https://github.com/CeciliaL1/the-zoo",
    },
  ];
  const root = document.documentElement;

  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light").matches
  );
  const [theme, dispatch] = useReducer(ThemeReducer, themes.light);
  console.log(theme);
  /*
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isFetched, setIsFetched] = useState(false);
*/
  useEffect(() => {
    /*
    const getProjects = async () => {
      const projects = await get<IProject[]>("http://localhost:3000/portfolio");
      setProjects(projects);
      setIsFetched(true);
    };

    if (!isFetched) {
      getProjects();
    }
*/
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
    if (!dispatch) {
      return;
    }

    return theme.name === themes.light.name
      ? dispatch({ type: ActionType.TOGGLED, payload: themes.dark })
      : dispatch({ type: ActionType.TOGGLED, payload: themes.light });
  };

  return (
    <>
      <ThemeDispatch.Provider value={dispatch}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <PortfolioContext.Provider value={{ projects: projects }}>
            <RouterProvider router={router}></RouterProvider>
          </PortfolioContext.Provider>
        </ThemeContext.Provider>
      </ThemeDispatch.Provider>
    </>
  );
}

export default App;
