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
        <motion.h1
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          Cecilia Lepik
        </motion.h1>
        <NavMenu open={open}>
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/"}>Home</NavLink>
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/Portfolio"}>Portfolio</NavLink>
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <NavLink to={"/Contact"}>Connect</NavLink>
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
          <HamburgerMenu open={open} onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerMenu>
        </motion.div>
      </HeaderWrapper>

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
