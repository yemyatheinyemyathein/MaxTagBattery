import React, { useRef, useState } from "react";
import maxTagImg from "../../assets/maxtag-01-2.png";
import ParkingBg from "../../assets/highway-toll.png";
import { motion, useInView } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa"; // FontAwesome Shopping Cart Icon

const ParkingSectin = () => {
  const ParkingRef = useRef(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(ParkingRef, { once: true });

  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    
    // Calculate the offset based on mouse position
    const xOffset = (mouseX / window.innerWidth - 0.5) * -40; // Opposite movement on X axis
    const yOffset = (mouseY / window.innerHeight - 0.5) * -40; // Opposite movement on Y axis

    // Using requestAnimationFrame for smooth movement
    requestAnimationFrame(() => {
      setImagePosition({
        x: xOffset,
        y: yOffset,
      });
    });
  };

  return (
    <div
      className="py-14 relative flex justify-center items-center flex-col"
      ref={ParkingRef}
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${ParkingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay with #191919 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000",
          opacity: 0.7, // Semi-transparent overlay
          zIndex: 0, // Ensure overlay stays behind the content
        }}
      ></div>

      {/* MaxTag Image with dynamic movement */}
      <motion.img
        src={maxTagImg}
        className="w-[450px] transition-transform duration-300 ease-in-out"
        style={{
          transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`, // Apply movement based on mouse position
        }}
      />

      <div className="text-center text-white px-4 py-6 relative">
        <motion.h2
          className="text-[80px] font-semibold text-center font-outline-2 text-[#191919]"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          MaxTag
        </motion.h2>
        <h2 className="text-4xl font-semibold text-center">Convenience For Toll And Parking</h2>
        <p className="text-center">Let's save your time with MAXTAG in just seconds!</p>

        {/* Centered button with Flex */}
        <div className="text-center mt-4 flex justify-center items-center hover:animate-shake">
          <button className="flex items-center text-white px-6 py-3 rounded-full bg-[#B80024] transition">
            Add To Cart
            <FaShoppingCart className="ml-2" />
          </button>
        </div>

        {/* Centered "Learn More" button */}
        <div className="text-center mt-4 hover:animate-shake">
          <button className="text-center text-white px-6 py-3 rounded-full border border-white transition">
            Learn More {"-->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingSectin;
