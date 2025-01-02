import React from "react";
import { motion } from "framer-motion";
import Overvierw01 from "../../assets/rechargeableBtOvervierw01.png";
import Overvierw02 from "../../assets/rechargeableBtOvervierw02.png";
import Overvierw03 from "../../assets/rechargeableBtOvervierw03.png";
import Overvierw04 from "../../assets/rechargeableBtOvervierw04.png";
import Overvierw05 from "../../assets/rechargeableBtOvervierw05.png";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OverviewRechargeableBt = () => {
  const navigate = useNavigate();
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
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

        {/* Main Content */}
        <main className="container mx-auto px-4 bg-gray-50">
          <section className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <motion.h2
                className="text-black text-[20px] font-bold"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                Charge with USB Type-C Cable
              </motion.h2>
              <img
                src={Overvierw01}
                alt="USB Type-C Charging"
                className="object-cover mb-4"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <motion.h2
                className="text-black text-[20px] font-bold"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                Wide Range Of Applications
                <p className="text-[15px] font-thin mt-2">
                  It can be used in most 9V battery products, safe and stable
                  protection charger.
                </p>
              </motion.h2>
              <img
                src={Overvierw02}
                alt="Wide Range Of Applications"
                className="object-cover mb-4"
              />
            </div>
          </section>

          <section className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <motion.h2
                className="text-black text-[20px] font-bold"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                Keep your MaxTag running <br /> smoothly <br /> with 9V Recharge
                Battery
              </motion.h2>
              <img
                src={Overvierw03}
                alt="USB Type-C Charging"
                className="object-cover mb-4"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <motion.h2
                className="text-black text-[20px] font-bold"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                Your Eco-Friendly Choice
                <p className="text-[15px] font-thin mt-2">
                  Help protect the environment by using MaxTag 9V rechargeable
                  battery.
                </p>
              </motion.h2>
              <img
                src={Overvierw04}
                alt="Wide Range Of Applications"
                className="object-cover mb-4"
              />
            </div>
          </section>
        </main>
      </div>
      {/* Lifestyle section  */}
      <div>
        {/* Header Section */}
        <header className="text-center py-6">
          <div className="text-center pt-6 tracking-widest">
            <h2 className="text-md font-thin uppercase">BUY IT NOW</h2>
          </div>
          <motion.h1
            className="text-[50px] text-black font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            For a Sustainable Lifestyle
          </motion.h1>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4">
          <section className="grid md:grid-cols-2 gap-8 flex flex-col justify-start items-center">
            <div className="flex flex-col sm:items-center">
              <motion.h2
                className="text-black text-[20px] font-bold"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                Li-ion Micro USB Rechargeable Battery
              </motion.h2>
              <motion.div
                className="text-left space-y-3 mt-10"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                {[
                  "1000 mAh Li-ion battery",
                  "Charge conveniently with USB Type-C cable",
                  "More than 500 recharge cycles.",
                  "Over voltage charging protection.",
                  "Recommended for SMART TAG / MAXTAG",
                  "MS IEC 62133 requirements complied•",
                ].map((item, index) => (
                  <p key={index} className="text-[16px] flex items-center">
                    <span className="w-2 h-2 bg-[#BB0024] rounded-full mr-10"></span>
                    {item}
                  </p>
                ))}
                <div className="w-full flex justify-start">
                  <button
                    onClick={() => navigate("/shop/3")}
                    className="flex justify-center items-center gap-2 bg-[#BB0024] text-white px-5 py-2 mt-4 text-sm"
                  >
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={Overvierw05}
                alt="Wide Range Of Applications"
                className="w-[600px] object-cover"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OverviewRechargeableBt;
