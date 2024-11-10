import styled, { css } from "styled-components";

interface IMenyProps {
  open: boolean;
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
  }
  a {
    text-decoration: none;
    color: black;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 801px) {
    ul {
      display: none;
    }
  }

  ${({ open }) =>
    open
      ? css`
          ul {
            display: flex;
            flex-direction: column;
            text-align: left;
            background-color: #0d2538;
            position: fixed;
            top: 0;
            right: 0px;
            height: 100vh;
            width: 300px;
            padding: 0;
          }
          li:nth-child(1) {
            margin-top: 100px;
          }
          li {
            margin-top: 30px;
          }
          a {
            color: white;
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
    right: 100px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
      width: 2rem;
      height: 0.3rem;
      background-color: ${({ open }) => (open ? "#f1f1f1" : "black")};
      border-radius: 10px;
    }
  }
`;
