import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiIntellijidea,
  SiVisualstudiocode,
  SiPycharm,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
      {
        title: "Database",
        icons: [<SiMysql />, <FaPhp />, <FaPython />],
      },
      {
        title: "Ms Office",
        icons: [<FaFilePowerpoint />, <FaFileExcel />, <FaFileWord />],
      },
      {
        title: "Code editors",
        icons: [<SiIntellijidea />, <SiVisualstudiocode />, <SiPycharm />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Best inventor of the year 2019 [schooling]",
        stage: "2019",
      },
      {
        title: "Best reader of the year [schooling] ",
        stage: "2019 - 2020",
      },
      {
        title: "Various awards for Public speeches [schooling]",
        stage: "2011 onwards",
      },
      {
        title: "Basketball team player [schooling]",
        stage: "2017 - 2020",
      },
    ],
  },
  {
    title: "Projects done",
    info: [
      {
        title: "Tumor image detection project",
        stage: "PYTHON - JUPYTER NOTEBOOK",
      },
      {
        title: "E-commerce and shopping website",
        stage: "HTML CSS JS",
      },
      {
        title: "Hospital management system",
        stage: "HTML CSS JS PHP MySQL",
      },
      {
        title: "Multiple Arduino projects [award-winning]",
        stage: "C++ ARDUINO IDE",
      },
      {
        title: "Current portfolio site",
        stage: "HTML JS NextJS REACT TAILWIND ",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "HND in Software engineering - BCAS CAMPUS",
        stage: "READING",
      },
      {
        title: "Access IT [ foundation program ] - BCAS CAMPUS",
        stage: "DISTINCTION",
      },
      {
        title:
          "Primary education [ pre-school - GCE - O/L ] - AMAL INTERNATIONAL SCHOOL",
        stage: "PASS",
      },
    ],
  },
];

// components

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]  "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex h-full flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              More about <span className="text-accent"> Me</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-1 "
            >
              An aspiring software engineering workaholic who is dedicated to
              the work he does, currently following up my HND in Computer
              science who's dream is to achieve a Full stack developer role!
            </motion.p>
            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={0.5} duration={8} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={1} duration={8} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                    Satisfied clients
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={20} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                    Finished projects
                  </div>
                </div>

                {/* awards */}
                <div className="relative flex-1 ">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={4} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                    Winning awards
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index == itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start md:mb-2">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className=" font-bold mb-2 md:mb-0">
                    {" "}
                    {"#" + " "}
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="font-light">{item.stage}</div>
                  <div className="flex gap-x-4 ">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white ">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
