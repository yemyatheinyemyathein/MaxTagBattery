import React from "react";
import { motion } from "framer-motion";
import Product01 from "../../assets/product2.png";
import Product02 from "../../assets/product3.jpg";
import { useNavigate } from "react-router-dom";
import { FaAtom, FaCheckSquare, FaDirections } from "react-icons/fa";

const FeatureSection = () => {
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
    <div className="bg-white text-[#7A7A7A] px-4">
      <section className="py-24">
        <div className="max-w-screen-xl container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="sm:text-left text-center">
                <h2 className="text-md font-thin uppercase">The Key</h2>
                <motion.h1
                  className="text-[50px] text-black font-bold"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  Features
                </motion.h1>
              </div>

              {/* Feature 1 */}
              <div className="flex items-start mb-6 animate-fadeInUp mt-8">
                <div className="text-[#BB0024] text-3xl p-2 border-2 border-[#BB0024] rounded-full mr-4">
                  <FaCheckSquare />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#950420] mb-4">
                    Self-adheres for easy installation
                  </h3>
                  <p className="text-[#7A7A7A]">
                    Comes with a high quality 3M Sticky Gel Pad that can be
                    removed without leaving any permanent mark on your car's
                    dashboard.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start mb-6 animate-fadeInUp mt-8">
                <div className="text-[#BB0024] text-3xl p-2 border-2 border-[#BB0024] rounded-full mr-4">
                  <FaDirections />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#950420] mb-4">
                    45° angle for a faster detection
                  </h3>
                  <p className="text-[#7A7A7A]">
                    You will no longer need to hold the device for safer
                    driving.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start mb-6 animate-fadeInUp mt-8">
                <div className="text-[#BB0024] text-3xl p-2 border-2 border-[#BB0024] rounded-full mr-4">
                  <FaAtom />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#950420] mb-4">
                    Moulded using thermoplastic elastomer (TPE)
                  </h3>
                  <p className="text-[#7A7A7A]">
                    TPE is a rubber-like material to prevent slips and scratches
                    to your device.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center space-y-10 animate-fadeInUp mt38">
              <img
                src={Product01}
                alt="Dashboard Holder 1"
                className="w-[300px]"
              />
              <img
                src={Product02}
                alt="Dashboard Holder 2"
                className="w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
