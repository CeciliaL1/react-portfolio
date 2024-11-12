import { motion } from "framer-motion";
import { RowWrapper } from "../components/styled/Wrappers";

import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <>
      <RowWrapper>
        <div className="connect-social-div">
          <h3>Connect with me via social media</h3>
          <RowWrapper>
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
          </RowWrapper>
        </div>

        <div>
          <ContactForm></ContactForm>
        </div>
      </RowWrapper>
    </>
  );
};
