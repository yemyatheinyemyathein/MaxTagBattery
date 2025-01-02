import React from "react";
import { motion } from "framer-motion";

const ListAnimation = ({ List, BgAnimationOn }) => {
  return (
    <div className="relative space-y-6 py-12 px-8 md:px-16 overflow-hidden">
      {/* First Animated Background */}
      {BgAnimationOn && (
        <motion.div
          className="absolute top-32 -right-28 w-[120%] h-full bg-red-200 z-0 bg-opacity-20 rounded-t-[100%]"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1,
          }}
        ></motion.div>
      )}

      {/* List Items */}
      {List.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 relative z-10"
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.5,
          }}
        >
          {index % 2 === 0 ? (
            <div className="flex flex-col md:flex-row justify-start items-center w-full gap-8 md:gap-16 lg:gap-20 py-4 2xl:px-72">
              <div className="text-[50px] md:text-[60px] lg:text-[70px] text-[#BB0024] font-bold text-vertical-flip">
                {item.number}
              </div>
              <div className="text-[#BB0024]">
                {typeof item.name === "string" ? (
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold">
                    {item.name}
                  </h3>
                ) : (
                  item.name
                )}
                {typeof item.description === "string" ? (
                  <p className="text-[#7A7A7A] text-[14px] md:text-[16px]">
                    {item.description}
                  </p>
                ) : (
                  item.description
                )}
              </div>
              {typeof item.icon === "string" ? (
                <motion.img
                  src={item.icon}
                  alt={item.name}
                  className="w-[100px] md:w-[110px] lg:w-[130px]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 150 }}
                />
              ) : (
                item.icon
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-end items-center w-full gap-8 md:gap-16 lg:gap-20 py-4 2xl:px-72">
              {typeof item.icon === "string" ? (
                <motion.img
                  src={item.icon}
                  alt={item.name}
                  className="w-[100px] md:w-[110px] lg:w-[130px]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 150 }}
                />
              ) : (
                item.icon
              )}
              <div className="text-[#BB0024]">
                {typeof item.name === "string" ? (
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold">
                    {item.name}
                  </h3>
                ) : (
                  item.name
                )}
                {typeof item.description === "string" ? (
                  <p className="text-[#7A7A7A] text-[14px] md:text-[16px]">
                    {item.description}
                  </p>
                ) : (
                  item.description
                )}
              </div>
              <div className="text-[50px] md:text-[60px] lg:text-[70px] text-[#BB0024] font-bold text-vertical">
                {item.number}
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Second Animated Background */}
      {BgAnimationOn && (
        <motion.div
          className="absolute top-24 -left-28 w-[120%] h-[700px] bg-red-300 z-0 bg-opacity-20 rounded-t-[50%]"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1,
          }}
        ></motion.div>
      )}
    </div>
  );
};

export default ListAnimation;
