import { NavLink, Outlet } from "react-router-dom";
import {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
} from "../components/styled/Wrappers";
import { HamburgerMenu, NavMenu } from "../components/styled/Menu";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "styled-components";
import { Switch } from "../components/Switch";

export const Layout = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderWrapper secondarycolor={theme.secondaryColor} color={theme.color}>
        <Switch switchOn={theme} click={toggleTheme}></Switch>
        <motion.h1
          initial={{
            opacity: 0,

            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          Cecilia Lepik
        </motion.h1>
        <NavMenu
          open={open}
          color={theme.color}
          primarycolor={theme.primaryColor}
          tetriarycolor={theme.tetriaryColor}
        >
          <ul>
            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  duration: 1,
                },
              }}
              whileHover={open ? "" : { scale: 1.2 }}
              style={{ x: 100 }}
            >
              <NavLink
                to={"/"}
                onClick={() => {
                  if (open) {
                    setOpen(!open);
                  }
                }}
              >
                Home
              </NavLink>
            </motion.li>

            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  duration: 1,
                },
              }}
              whileHover={open ? "" : { scale: 1.2 }}
              style={{ x: 100 }}
            >
              <NavLink
                to={"/Portfolio"}
                onClick={() => {
                  if (open) {
                    setOpen(!open);
                  }
                }}
              >
                Portfolio
              </NavLink>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  duration: 1,
                },
              }}
              whileHover={open ? "" : { scale: 1.2 }}
              style={{ x: 100 }}
            >
              <NavLink
                to={"/Contact"}
                onClick={() => {
                  if (open) {
                    setOpen(!open);
                  }
                }}
              >
                Connect
              </NavLink>
            </motion.li>
          </ul>
        </NavMenu>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,

            transition: {
              duration: 1,
            },
          }}
        >
          <HamburgerMenu
            open={open}
            onClick={handleClick}
            color={theme.color}
            primarycolor={theme.primaryColor}
            tetriarycolor={theme.tetriaryColor}
          >
            <div></div>
            <div></div>
            <div></div>
          </HamburgerMenu>
        </motion.div>
      </HeaderWrapper>

      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>

      <FooterWrapper secondarycolor={theme.secondaryColor} color={theme.color}>
        <div>
          <h3>Cecilia Lepik</h3>
          <a href="tel:0729681659">0729-681659</a>
          <br></br>
          <a href="email:cecilialepik@gmail.com">cecilialepik@gmail.com</a>
        </div>
        <div>
          <a href="https://github.com/CeciliaL1" target="_blank">
            <motion.i
              className="fa-brands fa-github"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            ></motion.i>
          </a>
          <a
            href="https://www.linkedin.com/in/cecilia-lepik-70360b213"
            target="_blank"
          >
            <motion.i
              className="fa-brands fa-linkedin"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            ></motion.i>
          </a>
        </div>
      </FooterWrapper>
    </>
  );
};
