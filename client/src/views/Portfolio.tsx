import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { Project } from "../components/Project";
import { RowWrapper } from "../components/styled/Wrappers";

export const Portfolio = () => {
  const { projects } = useContext(PortfolioContext);
  projects.sort((a, b) => b.id - a.id);
  return (
    <>
      <RowWrapper gap={20}>
        {projects.map((project) => (
          <Project project={project} key={project.id}></Project>
        ))}
      </RowWrapper>
    </>
  );
};
