import { motion } from "framer-motion";
import { Form } from "react-router-dom";
import { SubmitButton } from "./styled/Buttons";
import { Name, Email, Textarea } from "./styled/Input";
import { FormEvent, useState } from "react";
import { H3styled } from "./styled/TextContent";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <>
      <H3styled>Connect with me via Email</H3styled>
      <Form>
        <Name
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Name>
        <Email
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Email>
        <Textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></Textarea>

        <SubmitButton
          as={motion.button}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleSubmit}
        >
          Send
        </SubmitButton>
      </Form>
    </>
  );
};
