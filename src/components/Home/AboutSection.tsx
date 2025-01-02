import { useRef } from "react";
import AboutBg from "../../assets/aboutBg.jpg";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const AboutRef = useRef(null);
  const isInView = useInView(AboutRef, { once: true });


  return (
    <section
      className="py-12 relative"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={AboutRef}
    >
      {/* Gradient overlay from top-right corner */}
      <div
        className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-[#191919]"
        // style={{
        //   clipPath: "polygon(100% 50%, 100% 100%, 0 100%)", // Adjust gradient area to avoid text overlap
        // }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4">
            {/* Left content can be added here */}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="animate-fadeInRight mx-24">
              <motion.h2 className="text-[80px] font-semibold text-left font-outline-2 text-[#191919]"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}>
                About
              </motion.h2>
              <h2 className="text-4xl font-semibold text-left">
                Basset Sdn. Bhd.
              </h2>
              <p className="mt-4 tracking-wide text-xl">
                Basset Sdn Bhd is a company that has been in operation for over
                10 years. It was founded as a manufacturing facility for the
                production of printed circuit board (PCB) assemblies. The
                company has established itself as a reputable and reliable
                provider of PCB assemblies to a variety of industries.
              </p>
              <div className="mt-6">
              <button className="text-lg bg-transparent border-2 border-white text-white px-8 py-2 rounded-full tracking-wide font-bold">
                Learn More {"-->"}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
