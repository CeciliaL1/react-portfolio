import { IExperience } from "../models/IExperience";
import { Ptag } from "./styled/TextContent";
import { ColumnWrapper, ContentWrapper } from "./styled/Wrappers";

export interface IExperienceProp {
  experience: IExperience;
}

export const Experience = ({ experience }: IExperienceProp) => {
  return (
    <>
      <ContentWrapper>
        <ColumnWrapper>
          <h3>{experience.workplace}</h3>
          <p>{experience.duration}</p>

          <Ptag>{experience.description}</Ptag>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
