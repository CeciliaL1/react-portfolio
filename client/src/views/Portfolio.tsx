import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { Project } from "../components/Project";

export const Portfolio = () => {
  const { projects } = useContext(PortfolioContext);

  console.log("projects", projects);
  return (
    <>
      {projects.map((project) => (
        <Project project={project}></Project>
      ))}
    </>
  );
};
