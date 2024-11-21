import { PrimaryButton } from "./styled/Buttons";
import { useTheme } from "../contexts/ThemeContext";

interface IButtonProps {
  children: JSX.Element;
  click?: () => void;
}

export const Button = ({ children, click }: IButtonProps) => {
  const { theme } = useTheme();

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
