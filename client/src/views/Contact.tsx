import { motion } from "framer-motion";
import { RowWrapper } from "../components/styled/Wrappers.tsx";
import { Atag, H3styled } from "../components/styled/TextContent.tsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.ts";

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <RowWrapper gap={10} margin={150}>
        <div>
          <H3styled color={theme.color}>Send me an mail</H3styled>
          <Atag
            href="mailto:cecilialepik@gmail.com"
            linkcolor={theme.linkColor}
          >
            cecilialepik@gmail.com
          </Atag>
        </div>
        <div className="connect-social-div">
          <H3styled color={theme.color}>
            Or connect with me via socials
          </H3styled>

          <Atag
            linkcolor={theme.linkColor}
            href="https://github.com/CeciliaL1"
            target="_blank"
          >
            <motion.i
              className="fa-brands fa-github"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            ></motion.i>
          </Atag>
          <Atag
            linkcolor={theme.linkColor}
            href="https://www.linkedin.com/in/cecilia-lepik-70360b213"
            target="_blank"
          >
            <motion.i
              className="fa-brands fa-linkedin"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            ></motion.i>
          </Atag>
        </div>
      </RowWrapper>
    </>
  );
};
