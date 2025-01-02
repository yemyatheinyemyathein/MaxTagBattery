import React from "react";
import { motion } from "framer-motion";
import DashboardHolderV1 from "../../assets/DashboardHolderV1.png";
import DashboardHolderV2 from "../../assets/DashboardHolderV2.png";
import Product01 from "../../assets/product2.png";
import Product02 from "../../assets/product3.jpg";
import { useNavigate } from "react-router-dom";
import { FaAtom, FaCheckSquare, FaDirections } from "react-icons/fa";

const OvervierwDashboardHolder = () => {
  const navigate = useNavigate();

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
      {/* overviewr section  */}
      <div>
        {/* Header Section */}
        <header className="text-center py-6">
          <div className="text-center pt-6 tracking-widest">
            <h2 className="text-md font-thin uppercase">Introduction</h2>
          </div>
          <motion.h1
            className="text-[50px] text-black font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Overview
          </motion.h1>
        </header>
        {/* overview section  */}
        <section className="relative">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <motion.img
                  src={DashboardHolderV1}
                  alt="Version 1.0"
                  className="rounded"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.p
                  className="mt-4 text-[20px] font-medium text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Version 1.0
                </motion.p>
              </div>

              <div className="flex flex-col items-center">
                <motion.img
                  src={DashboardHolderV2}
                  alt="Version 2.0"
                  className="rounded"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.p
                  className="mt-4 text-[20px] font-medium text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Version 2.0
                </motion.p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OvervierwDashboardHolder;
