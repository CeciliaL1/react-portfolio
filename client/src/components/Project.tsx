import { useContext } from "react";

import { IProject } from "../models/IProject";
import { ContentWrapper, ColumnWrapper } from "./styled/Wrappers";
import { Atag, H3styled, Ptag } from "./styled/TextContent";
import { ThemeContext } from "../contexts/ThemeContext";

interface IProjectProps {
  project: IProject;
}

export const Project = ({ project }: IProjectProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ContentWrapper
        width={500}
        padding={20}
        primarycolor={theme.primaryColor}
      >
        <ColumnWrapper>
          <H3styled color={theme.color}>{project.projectName}</H3styled>
          <Ptag color={theme.color}>{project.projectDesc}</Ptag>
          <div className="project-section-deploy">
            {project.deployed === 1 ? (
              <Ptag color={theme.color}>Project is deployed:</Ptag>
            ) : (
              <Ptag color={theme.color}>Link to repo at Github:</Ptag>
            )}
            <Atag
              linkcolor={theme.linkColor}
              href={project.link}
              target="_blank"
            >
              {project.projectName}
            </Atag>
          </div>

          <hr />
          <Ptag margin={10} color={theme.color}>
            Tech Stack: {project.tools}
          </Ptag>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
