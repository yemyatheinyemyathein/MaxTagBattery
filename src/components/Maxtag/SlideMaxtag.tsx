import React, { useState } from "react";
import { motion } from "framer-motion";
import SlideIcon01 from "../../assets/dashboard-holder-png-1.png";
import SlideIcon02 from "../../assets/dashboard-holder-png-2.png";
import SlideIcon03 from "../../assets/maxtag-01-2.png";
import { FaShoppingCart } from "react-icons/fa";

const SlideMaxtag = () => {
  const slides = [
    {
      title: "Battery Slot",
      description:
        "MaxTag operates with both single use and rechargeable battery. Replace the battery on the battery slot when MaxTag battery is dead.",
      image: SlideIcon01,
      buttonText: "Buy Now",
    },
    {
      title: "Enhanced LCD Display",
      description:
        "MaxTag has an LCD display for you to check your Touch 'n Go card credit balances.",
      image: SlideIcon02,
      buttonText: "Shop Now",
    },
    {
      title: "Latest Model Of Microprocessor",
      description: "Faster detection with the latest model of processors.",
      image: SlideIcon03,
      buttonText: "Shop Now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-[#191919] text-white py-28 relative">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
          <motion.div
            className="flex-1"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            key={slides[currentIndex].image}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-[500px] mx-auto px-12"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center px-12"
            initial={{
              opacity: currentIndex % 2 === 0 ? 0 : 1,
              y: currentIndex % 2 !== 0 ? 100 : 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            key={slides[currentIndex].title}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              duration: 5,
            }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {slides[currentIndex].title}
            </h2>
            <p className="my-6 mt-8 text-[#7A7A7A]">
              {slides[currentIndex].description}
            </p>
            <div className="flex justify-center mt-4">
              <button className="flex items-center gap-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                <FaShoppingCart /> {slides[currentIndex].buttonText}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Custom Navigation Arrows */}
        <div
          onClick={handlePrev}
          className="text-xl absolute top-1/2 left-0 transform -translate-y-1/2 text-black bg-white p-4 py-6 cursor-pointer hover:bg-red-600"
        >
          {"<"}
        </div>
        <div
          onClick={handleNext}
          className="text-xl absolute top-1/2 right-0 transform -translate-y-1/2 text-black bg-white p-4 py-6 cursor-pointer hover:bg-red-600"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default SlideMaxtag;
