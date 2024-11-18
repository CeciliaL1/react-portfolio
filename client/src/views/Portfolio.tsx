import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { Project } from "../components/Project";
import { RowWrapper } from "../components/styled/Wrappers";

export const Portfolio = () => {
  const { projects } = useContext(PortfolioContext);

  projects.reverse();
  return (
    <>
      <RowWrapper>
        {projects.map((project) => (
          <Project project={project}></Project>
        ))}
      </RowWrapper>
    </>
  );
};
