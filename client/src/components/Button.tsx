import { useContext } from "react";

import { PrimaryButton } from "./styled/Buttons";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  children: JSX.Element;
  click?: () => void;
}

export const Button = ({ children, click }: IButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <PrimaryButton
        background={theme.primaryColor}
        color={theme.color}
        hover={theme.backgroundColor}
        onClick={click}
      >
        {children}
      </PrimaryButton>
    </>
  );
};
