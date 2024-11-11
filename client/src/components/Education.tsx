import { IEducation } from "../models/IEducations";
import { Ptag } from "./styled/TextContent";

import { ColumnWrapper, ContentWrapper } from "./styled/Wrappers";

export interface IEducationProps {
  education: IEducation;
}

export const Education = ({ education }: IEducationProps) => {
  return (
    <>
      <ContentWrapper>
        <ColumnWrapper>
          <h3>{education.title}</h3>
          <p>{education.duration}</p>

          <Ptag>{education.description}</Ptag>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
