import React from "react";
import { motion } from "framer-motion";
import MaxTagImage from "../../assets/maxtag-01-2.png";

const OverviewMaxtag = () => {
  // Animation Variants
  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <div className="bg-white text-[#7A7A7A] px-8">
      {/* Introduction Section */}
      <div className="text-center pt-6 tracking-widest">
        <h2 className="text-md font-thin uppercase">Introduction</h2>
      </div>

      {/* Overview Section */}
      <div className="text-center pb-4">
        <h2 className="text-[50px] font-bold text-black">Overview</h2>
      </div>

      {/* Description, Image, and Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pt-10 pb-12">
        {/* Description */}
        <motion.div
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[17px]"
        >
          <h3 className="text-xl font-bold text-black mb-4">Description</h3>
          <p className="mb-4">
            MaxTag makes your journeys through toll plazas a breeze. It allows
            you to easily check your Touch ‘n Go balance.
          </p>
          <p className="mb-4">
            With a new generation microprocessor and an enhanced LCD display,
            MaxTag performs reliably for your toll and parking convenience.
          </p>
          <div className="text-[#950420] relative my-8">
            <div className="absolute w-[3px] h-full bg-[#950420]"></div>
            <p className="ml-10">
              Produced by the same manufacturer of SmartTAG, MaxTag is 100%
              compatible with all SmartTAG lanes.
            </p>
          </div>
          <p>
            Maxtag helps you quicken your journeys through Malaysia's toll
            plazas.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center items-center"
        >
          <img src={MaxTagImage} alt="Maxtag" className="min-w-[400px]" />
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl font-bold text-black mb-4">Highlights</h3>
          <ul className="list-disc list-inside space-y-6">
            <div className="relative flex items-center gap-6">
              <div className="w-[7px] h-[7px] bg-[#950420] rounded-full" />
              <p>Infrared device for secure tolls and parking e-payment.</p>
            </div>
            <div className="relative flex items-center gap-6">
              <div className="w-[7px] h-[7px] bg-[#950420] rounded-full" />
              <p>Produced by the same manufacturer of SmartTAG</p>
            </div>
            <div className="relative flex items-center gap-6">
              <div className="w-[7px] h-[7px] bg-[#950420] rounded-full" />
              <p>100% compatible with the SmartTag lanes.</p>
            </div>
            <div className="relative flex items-center gap-6">
              <div className="w-[7px] h-[7px] bg-[#950420] rounded-full" />
              <p>More than four times faster than the Touch 'n Go Lanes.</p>
            </div>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default OverviewMaxtag;
