import { Link } from "react-router-dom";
import { MainWrapper } from "../components/styled/Wrappers";
import { Ptag } from "../components/styled/TextContent";

import { useTheme } from "../contexts/ThemeContext";

export const NotFound = () => {
  const { theme } = useTheme();
  return (
    <>
      <MainWrapper>
        <h1 style={{ color: theme.linkColor }}>404</h1>
        <Ptag linkcolor={theme.linkColor}>
          Oops! The page you are looking for does not exist.
        </Ptag>
        <Link style={{ color: theme.linkColor }} to="/">
          Go back to Home
        </Link>
      </MainWrapper>
    </>
  );
};
