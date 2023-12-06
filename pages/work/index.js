import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkList from "../worklist/WorkList";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-scroll scroll-smooth ">
      <div className="py-36 flex items-center">
        <div className="absolute inset-0 bg-[url('/projectbg.png')] bg-cover bg-no-repeat opacity-40 mix-blend-color-burn"></div>
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                My Projects <span className="text-accent">.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Want to see a FRACTION of my work, here you go, these are some
                of my websites and projects that I have built in my free time!
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[55%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
      <div className="z-20 ">
        <WorkList />
      </div>
    </div>
  );
};

export default Work;
