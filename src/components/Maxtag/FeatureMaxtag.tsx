import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import twoMachine from "../../assets/MaxTagShopTwoMachine.png";

const FeatureMaxtag = () => {
  return (
    <section className="bg-white text-[#7A7A7A] w-full mx-auto px-4 py-16">
      <div className="flex flex-wrap items-center justify-between px-12">
        {/* Header Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            <div className="sm:text-left text-center">
              <p className="text-md font-thin uppercase">THE KEY</p>
              <h2 className="text-[50px] font-bold text-black">Features</h2>
            </div>

            {/* Features Section with Animation */}
            <div className="w-full space-y-8">
              {/* Feature 1 */}
              <motion.div
                className="flex flex-col sm:flex-row items-center sm:items-start space-x-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-[70px] h-[70px] p-4 bg-yellow-200 text-yellow-800 rounded-full flex-shrink-0" />
                <div className="sm:text-left text-center mt-4">
                  <h3 className="text-xl font-bold text-[#950420]">
                    Quick & Easy
                  </h3>
                  <p className="mt-4 text-[18px]">
                    With the new generation of Microprocessor, MaxTag allows
                    Touch n go cards to be read at toll plazas in just seconds.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="flex flex-col sm:flex-row items-center sm:items-start space-x-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-[70px] h-[70px] p-4 bg-yellow-200 text-yellow-800 rounded-full flex-shrink-0" />
                <div className="sm:text-left text-center mt-4">
                  <h3 className="text-xl font-bold text-[#950420]">
                    Convenience
                  </h3>
                  <p className="mt-4 text-[18px]">
                    The enhanced LCD display allows user to check their touch n
                    go credit balance anywhere and anytime.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="flex flex-col sm:flex-row items-center sm:items-start space-x-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-[70px] h-[70px] p-4 bg-yellow-200 text-yellow-800 rounded-full flex-shrink-0" />
                <div className="sm:text-left text-center mt-4">
                  <h3 className="text-xl font-bold text-[#950420]">
                    Warranty Provided
                  </h3>
                  <p className="mt-4 text-[18px]">
                    MaxTag comes with either 1 year or 2 years manufacturer’s
                    warranty based on your purchase.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                className="flex flex-col sm:flex-row items-center sm:items-start space-x-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-[70px] h-[70px] p-4 bg-yellow-200 text-yellow-800 rounded-full flex-shrink-0" />
                <div className="sm:text-left text-center mt-4">
                  <h3 className="text-xl font-bold text-[#950420]">
                    Flexibility
                  </h3>
                  <p className="mt-4 text-[18px]">
                    The lightweight and portable MaxTag allows user to transfer
                    and use it in multiple different cars without hassle.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="text-center sm:text-left">
              <a className="inline-block bg-red-600 text-white text-sm font-semibold py-3 px-8 rounded transition duration-300">
                Shop Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Section with Animation */}
        <div className="hidden lg:block w-full lg:w-1/2 flex justify-center mt-16 md:mt-0">
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={twoMachine} alt="MaxTag" className="max-w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMaxtag;
