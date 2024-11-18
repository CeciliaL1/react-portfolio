import styled from "styled-components";

interface IWrapperProps {
  primarycolor?: string;
  secondarycolor?: string;
  tetriarycolor?: string;
  linkcolor?: string;
  color?: string;
  padding?: number;
  margin?: number;
  width?: number;
}

export const HeaderWrapper = styled.header<IWrapperProps>`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.secondarycolor};
  padding-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: ${(props) => props.color};
  h1 {
    margin-top: 22px;
    color: ${(props) => props.color};
  }
`;

export const FooterWrapper = styled.footer<IWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  border-top: 1px solid ${(props) => props.secondarycolor};
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  padding: 50px;
  color: ${(props) => props.color};

  a {
    color: ${(props) => props.color};
    margin-top: 10px;
    text-decoration: none;
  }
  i {
    color: ${(props) => props.color};
    font-size: 2rem;
    font-size: 2rem;
  }
`;

export const MainWrapper = styled.main`
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentWrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  background-color: ${(props) => props.primarycolor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;
  width: ${(props) => props.width}px;
  padding: ${(props) => props.padding}px;
  margin-bottom: ${(props) => (props.margin ? props.margin : 20)}px;
  color: ${(props) => props.color};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
