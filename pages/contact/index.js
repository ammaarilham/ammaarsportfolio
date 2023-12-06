import { Circles } from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import React, { useRef, useState } from "react";

import ParticlesContainer2 from "../../components/ParticlesContainer2.js";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jdl9y6q",
        "template_d4evrjl",
        formRef.current,
        "gZny36A-OxL4XWBtI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full bg-black/30">
      {/* <ParticlesContainer2 /> */}
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={formRef}
            action=""
            onSubmit={handleSumbit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="input"
              />
              <input
                name="user_email"
                type="email"
                placeholder="email"
                className="input"
              />
            </div>
            <input
              name="user_subject"
              type="text"
              placeholder="subject"
              className="input"
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute  text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
