import { useContext } from "react";

import { PrimaryButton } from "./styled/Buttons.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";

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
