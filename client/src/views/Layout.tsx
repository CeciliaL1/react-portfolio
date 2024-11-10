import { NavLink, Outlet } from "react-router-dom";
import {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
} from "../components/styled/Wrappers";
import { HamburgerMenu, NavMenu } from "../components/styled/Menu";
import { useState } from "react";
import { motion } from "framer-motion";

export const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderWrapper>
        <motion.h1>Cecilia Lepik</motion.h1>
        <NavMenu open={open}>
          <ul>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/"}>Home</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/CurriculumVitae"}>CV</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/Portfolio"}>Portfolio</NavLink>
            </motion.li>
          </ul>
        </NavMenu>
      </HeaderWrapper>
      <HamburgerMenu open={open} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>

      <FooterWrapper>
        <div>
          <h3>Cecilia Lepik</h3>
          <a href="tel:0729681659">0729-681659</a>
          <br></br>
          <a href="email:cecilialepik@gmail.com">cecilialepik@gmail.com</a>
        </div>
        <div>
          <a href="https://github.com/CeciliaL1" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="www.linkedin.com/in/cecilia-lepik-70360b213" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </FooterWrapper>
    </>
  );
};
