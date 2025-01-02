import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";

const FunctionalitySection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-white text-[#7A7A7A] py-8 px-4">
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center pt-6 tracking-widest">
            <h2 className="text-md font-thin uppercase">How It Works</h2>
          </div>
          <motion.h1
            className="text-[50px] text-black font-bold text-center mb-10"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Functionality
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Version 1.0 */}
            <div className="bg-white">
              <h3 className="text-center text-[30px] font-semibold text-gray-700 mb-4">
                Dashboard Holder{" "}
                <span className="text-[#7A7A7A] font-bold">
                  <TypingEffect text={["Version 1.0"]} speed={100} eraseDelay={1500} typingDelay={500} />
                </span>
              </h3>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/example1"
                  title="Version 1.0 Video"
                  className="w-full h-[309px]"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Version 2.0 */}
            <div className="bg-white">
              <h3 className="text-center text-[30px] font-semibold text-gray-700 mb-4">
                Dashboard Holder{" "}
                <span className="text-[#7A7A7A] font-bold">
                  <TypingEffect text={["Version 2.0"]} speed={100} eraseDelay={1500} typingDelay={500} />
                </span>
              </h3>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/example2"
                  title="Version 2.0 Video"
                  className="w-full h-[309px]"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunctionalitySection;
