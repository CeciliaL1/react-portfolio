import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

export const Portfolio = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <>
      {projects.map((project) => (
        <h1>{project.projectName}</h1>
      ))}
    </>
  );
};
