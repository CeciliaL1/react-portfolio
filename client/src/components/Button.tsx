import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { PrimaryButton } from "./styled/Buttons";

interface IButtonProps {
  children: JSX.Element;
  click?: () => void;
}

export const Button = ({ children, click }: IButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <PrimaryButton
        background={theme.buttonBackground}
        color={theme.color}
        hover={theme.backgroundColor}
        onClick={click}
      >
        {children}
      </PrimaryButton>
    </>
  );
};
