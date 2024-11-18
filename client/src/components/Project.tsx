import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IProject } from "../models/IProject";
import { ContentWrapper, ColumnWrapper } from "./styled/Wrappers";
import { Atag, Ptag } from "./styled/TextContent";

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
          <h3>{project.projectName}</h3>
          <p>{project.projectDesc}</p>
          {project.deployed === 1 ? (
            <p>Project is deployed:</p>
          ) : (
            <p>Link to repo at Github:</p>
          )}
          <Atag linkColor={theme.linkColor} href={project.link}>
            {project.projectName}
          </Atag>
          <hr />
          <Ptag margin={10}>Tech Stack: {project.tools}</Ptag>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
