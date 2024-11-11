import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid rgba(241, 241, 241, 0.5);
  padding-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  max-width: 900px;
  margin: auto;
  margin-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  background-color: rgba(214, 212, 212, 0.5);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
