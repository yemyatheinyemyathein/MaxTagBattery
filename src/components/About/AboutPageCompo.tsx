import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import BassetLogo from "../../assets/bassetLogo.png";
import Column2Image from "../../assets/AboutColumn2.jpg";
import Column3Image from "../../assets/AboutColumn201.jpg";
import Column3Icon01 from "../../assets/AboutColumn3Icon01.png";
import Column3Icon02 from "../../assets/AboutColumn3Icon02.png";
import Column3Icon03 from "../../assets/AboutColumn3Icon03.png";
import SlideIcon01 from "../../assets/dashboard-holder-png-1.png";
import SlideIcon02 from "../../assets/dashboard-holder-png-2.png";
import SlideIcon03 from "../../assets/maxtag-01-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faTruck,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const AboutPageCompo = () => {
  return (
    <section className="bg-white text-black py-16 px-16">
      {/* First Part */}
      <div className="bg-[#F3F3F3] container mx-auto p-8 rounded-xl text-[#7A7A7A]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
          {/* Left Column */}
          <motion.div
            className="p-2"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <img src={BassetLogo} alt="Logo" className="w-40 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">
              Basset Sdn. Bhd.
            </h1>
            <p className="mt-2">Company Registration Number (519107-V)</p>
            <p className="mt-4 leading-relaxed">
              Basset Sdn Bhd was established more than a decade ago as a
              manufacturing facility for printed circuit boards (“PCB”)
              Assembly. With a strong reputation for precision, reliability, and
              engineering expertise in this field, Basset has established itself
              as a one-stop destination for PCB Assembly with a world-class
              quality management system. In keeping with its commitment to
              professional manufacturing practices, Basset obtained the ISO
              9001:2000 certification in 2001 and is currently certified with
              ISO 9001:2015.
            </p>
            <p className="mt-4 leading-relaxed">
              Basset has the facilities, the capability and the technical
              expertise for the full range of PCBs.
            </p>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="w-full h-full flex flex-col gap-6"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50,  delay: 0.2 }}
          >
            <img
              src={Column2Image}
              alt="Assembling System"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-8"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <img
              src={Column3Image}
              alt="Futuristic Circuit"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            {/* Features */}
            {[
              { img: Column3Icon01, text: "Surface Mount Technology (SMT)" },
              { img: Column3Icon02, text: "Plastic Injection Moulding" },
              { img: Column3Icon03, text: "Pad Printing up to Four Colors" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 px-8 md:flex-row flex-col md:space-x-4 space-y-2 md:space-y-0"
              >
                <img src={item.img} alt={item.text} className="w-40 md:w-10" />
                <div>
                  <h2 className="font-bold text-[#BB0024]">{item.text}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Part */}
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[faCogs, faTruck, faShieldAlt].map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center space-x-4 sm:text-left"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-4xl text-[#BB0024]"
              />
              <div>
                <h3 className="text-lg sm:text-xl text-[#BB0024]">
                  {
                    ["High quality", "Fast delivery", "Up to 2 years warranty"][
                      index
                    ]
                  }
                </h3>
                <p className="text-[#7A7A7A] mt-2">
                  {
                    [
                      "With a decade of proven track record in Malaysia",
                      "MaxTag will take approximately 1-5 days.",
                      "Manufacturer’s warranty, depending on the package.",
                    ][index]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Part */}
      <div>
        <div className="text-center border-b border-gray-200 py-12">
          <h2 className="text-[40px] font-bold text-[#BB0024]">MaxTag</h2>
          <p className="text-[#7A7A7A]">TOLL AND PARKING CONVENIENCE</p>
        </div>

        <div className="py-8">
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1} // Default to 1 slide per view
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides on screens above 640px
              },
              1024: {
                slidesPerView: 3, // 3 slides on screens above 1024px
              },
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            {[
              SlideIcon01,
              SlideIcon02,
              SlideIcon03,
              SlideIcon01,
              SlideIcon02,
              SlideIcon03,
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide}
                  alt={`Slide Icon ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCompo;
