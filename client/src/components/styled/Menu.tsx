import styled, { css } from "styled-components";

interface IMenyProps {
  open: boolean;
  color: string;
  primarycolor: string;
  tetriarycolor: string;
}
export const NavMenu = styled.nav<IMenyProps>`
  margin-top: 22px;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    margin: 10px;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.color};
    letter-spacing: 1px;
  }
  @media screen and (max-width: 801px) {
    ul {
      display: none;
    }
  }

  ${({ open }) =>
    open
      ? css<IMenyProps>`
          ul {
            display: flex;
            flex-direction: column;
            text-align: left;
            background-color: ${(props) => props.primarycolor};
            position: fixed;
            top: 0;
            right: 0px;
            height: 100vh;
            width: 100vw;
            padding: 0;
            color: ${(props) => props.color};
          }
          li:nth-child(1) {
            margin-top: 100px;
          }
          li {
            margin-top: 30px;
            font-size: 1.2rem;
          }
          a {
            color: ${(props) => props.color};
          }
        `
      : ""}
`;

export const HamburgerMenu = styled.div<IMenyProps>`
  @media screen and (max-width: 800px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 30px;
    right: 60px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
      width: 2rem;
      height: 0.3rem;

      ${({ open }) =>
        open
          ? css<IMenyProps>`
              border: 0.3px solid ${(props) => props.color}30;
              background-color: ${(props) => props.tetriarycolor};
            `
          : css<IMenyProps>`
              border: 0.3px solid ${(props) => props.color}30;
              background-color: ${(props) => props.tetriarycolor};
            `};
      border-radius: 10px;
    }
  }
`;
