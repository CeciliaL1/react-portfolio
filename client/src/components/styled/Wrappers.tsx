import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  h1 {
    margin-top: 22px;
    color: black;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  a {
    color: black;
    margin: 10px;
  }
  i {
    color: black;
    font-size: 2rem;
    font-size: 2rem;
  }
`;

export const MainWrapper = styled.main`
  min-height: 80vh;
`;
