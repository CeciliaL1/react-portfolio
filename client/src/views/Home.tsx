import { LongFacts } from "../components/LongFacts";
import { ShortFacts } from "../components/ShortFacts";
import { ColumnWrapper, ContentWrapper } from "../components/styled/Wrappers";
import { TechnicalCompetencies } from "../components/TechnicalCompetencies";

export const Home = () => {
  return (
    <>
      <ContentWrapper>
        <div>
          <img
            src="public/cecilia.jpg"
            alt="Kvinna med blommig klänning"
            loading="lazy"
            width={150}
            height={200}
          />
        </div>
        <div>
          <ShortFacts></ShortFacts>
          <LongFacts></LongFacts>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <ColumnWrapper>
          <TechnicalCompetencies></TechnicalCompetencies>
        </ColumnWrapper>
      </ContentWrapper>
    </>
  );
};
