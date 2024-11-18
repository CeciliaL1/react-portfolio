import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 50%;
  position: relative;
  left: 70px;
  cursor: pointer;
  border: none;
  background-color: darkgray;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 5px;
`;

interface IButtonProps {
  background: string;
  color: string;
  hover: string;
}

export const PrimaryButton = styled.button<IButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  &:hover {
    background-color: ${(props) => props.hover};
  }
  height: 50px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
`;
