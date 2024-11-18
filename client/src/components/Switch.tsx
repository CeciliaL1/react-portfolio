import { ThemeContext } from "styled-components";
import { ITheme, themes } from "../models/Theme";
import { useContext } from "react";

interface ISwitchProps {
  switchOn: ITheme;
  click: () => void;
}

export const Switch = ({ switchOn, click }: ISwitchProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={click}
      className="switch-theme"
      style={{ color: theme.color, backgroundColor: theme.tetriaryColor }}
    >
      <i
        className={
          switchOn.name === themes.light.name
            ? "fa-regular fa-sun"
            : "fa-solid fa-moon"
        }
      ></i>
    </button>
  );
};
