import styled from "styled-components";
interface ITextContentProps {
  linkcolor?: string;
  margin?: number;
  color?: string;
}

export const TextContent = styled.p`
  max-width: 450px;
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: left;
  margin-top: 20px;

  li {
    margin: 10px;
  }
`;

export const Ptag = styled.p<ITextContentProps>`
  font-family: "Raleway", sans-serif;
  margin: ${(props) => props.margin}px;
  color: ${(props) => props.color};
`;
export const H3styled = styled.h3<ITextContentProps>`
  color: ${(props) => props.color};
  margin-bottom: 15px;
`;

export const Atag = styled.a<ITextContentProps>`
  color: ${(props) => props.linkcolor};
  margin-bottom: 20px;
`;
