import { Ul } from "./styled/TextContent";
import { ContentWrapper, ColumnWrapper } from "./styled/Wrappers.tsx";
import { TechnicalCompetencies } from "./TechnicalCompetencies.tsx";

export const Other = () => {
  return (
    <>
      <div className="content-margin">
        <h3>Other</h3>
        <ContentWrapper>
          <ColumnWrapper>
            <h3>Language</h3>
            <Ul>
              <li>Swedish - Native Language</li>
              <li>English - Good knowledge of speech and writing</li>
            </Ul>

            <TechnicalCompetencies></TechnicalCompetencies>
          </ColumnWrapper>
        </ContentWrapper>
      </div>
    </>
  );
};
