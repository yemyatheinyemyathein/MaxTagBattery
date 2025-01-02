import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FeatureSection = () => {
  const featureRef = useRef(null);
  const isInView = useInView(featureRef, { once: true });

  return (
    <section className="pb-12" ref={featureRef}>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Feature Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center text-center">
            <div className="sm::text-center md:text-left">
              <motion.div
                className="font-bold text-[70px] text-[#191919] font-outline-2"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                Feature
              </motion.div>
              <h2 className="text-3xl font-bold">Premium Quality</h2>
              <p className="mt-4 tracking-wide">
                Enjoy high-quality products, which can be integrated with other
                systems, such as inventory management or security systems, to
                provide additional functionality and automate processes.
              </p>
            </div>
          </div>

          {/* Fast Delivery */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 p-10 rounded-full bg-blue-500 text-white">
              <i className="fas fa-truck text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 tracking-wide">
              Orders dispatch within 24 hours. We guarantee that your packages
              will be delivered to their destination in the shortest time
              possible.
            </p>
          </motion.div>

          {/* 24/7 Support with More Details */}
          <motion.div
            className="col-span-1 md:col-span-1 flex flex-col items-center text-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 p-10 rounded-full bg-green-500 text-white">
              <i className="fas fa-headset text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2 tracking-wide">+60378052488 / WhatsApp 016-6681343</p>
            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-2 bg-[#b80024] text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                More details {"-->"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
