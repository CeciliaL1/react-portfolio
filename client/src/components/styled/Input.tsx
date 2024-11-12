import { styled } from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
`;

export const Name = styled.input.attrs({
  type: "text",
  placeholder: "Name...",
})`
  font-family: "Share Tech Mono", monospace;
  width: 80%;
  height: 25px;
  border: none;
  outline: none;
  margin: 5px;
`;

export const Email = styled(Name).attrs({
  type: "text",
  placeholder: "Email...",
})``;

export const Textarea = styled.textarea.attrs({
  type: "text",
  placeholder: "Your message...",
})`
  width: 80%;
  height: 60px;
  border: none;
  outline: none;
  margin: 5px;
`;
