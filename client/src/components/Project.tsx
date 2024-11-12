import { IProject } from "../models/IProject";
import { ContentWrapper, ColumnWrapper } from "./styled/Wrappers";

interface IProjectProps {
  project: IProject;
}

export const Project = ({ project }: IProjectProps) => {
  return (
    <>
      <ContentWrapper>
        <ColumnWrapper>
          <h3>{project.projectName}</h3>
          <p>{project.projectDesc}</p>
          {project.deployed === 1 ? (
            <p>Project is deployed:</p>
          ) : (
            <p>Link to repo at Github:</p>
          )}
          <a href={project.link}>{project.projectName}</a>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
