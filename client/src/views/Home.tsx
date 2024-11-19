import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { LongFacts } from "../components/LongFacts";

import {
  ColumnWrapper,
  ContentWrapper,
  RowWrapper,
} from "../components/styled/Wrappers";
import { TechnicalCompetencies } from "../components/TechnicalCompetencies";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <RowWrapper>
        <ContentWrapper
          primarycolor={theme.primaryColor}
          padding={20}
          color={theme.color}
          width={500}
        >
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
            <LongFacts></LongFacts>
          </div>
        </ContentWrapper>

        <ContentWrapper
          primarycolor={theme.primaryColor}
          padding={40}
          margin={100}
          color={theme.color}
          width={500}
          height={300}
        >
          <ColumnWrapper>
            <TechnicalCompetencies></TechnicalCompetencies>
          </ColumnWrapper>
        </ContentWrapper>
      </RowWrapper>
    </>
  );
};
