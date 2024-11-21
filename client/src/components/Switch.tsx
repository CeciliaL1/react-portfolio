import { ITheme, themes } from "../models/Theme";

import { useTheme } from "../contexts/ThemeContext";

interface ISwitchProps {
  switchOn: ITheme;
  click: () => void;
}

export const Switch = ({ switchOn, click }: ISwitchProps) => {
  const { theme } = useTheme();
  if (!theme) {
    return;
  }
  return (
    <button
      onClick={click}
      className="switch-theme"
      style={{ backgroundColor: theme.tetriaryColor }}
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
