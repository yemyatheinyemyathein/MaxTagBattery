import React, { useRef } from "react";
import FeedBackBg from "../../assets/shape-1.png";
import avatar from "../../assets/woman-avatar.png"; // Sample avatar
import { motion, useInView } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa"; // For star and quote icons
import Slider from "react-slick";

const FeedBackSection = () => {
  const FeedBackRef = useRef(null);
  const isInView = useInView(FeedBackRef, { once: true });

  const feedBacks = [
    {
      name: "John Doe",
      stars: [1, 2, 3, 4, 5],
      title: "Good Quality",
      description:
        "Good condition and packaging is really dope! I like it. Highly recommended!",
    },
    {
      name: "Jane Smith",
      stars: [1, 2, 3, 4],
      title: "Excellent Service",
      description:
        "The service was beyond expectation, very friendly staff, and quick response. Will use again!",
    },
    {
      name: "Mike Johnson",
      stars: [1, 2, 3, 4, 5],
      title: "Best Purchase Ever",
      description:
        "I'm very happy with my purchase. Everything was perfect, from delivery to quality.",
    },
  ];

  // Slick Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disables navigation arrows
  };

  return (
    <div
      className="mx-auto relative flex flex-col lg:flex-row justify-center items-center py-12 px-8 gap-8"
      ref={FeedBackRef}
      style={{
        backgroundImage: `url(${FeedBackBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000",
          opacity: 0.5, // Semi-transparent overlay
          zIndex: 0, // Ensure overlay stays behind the content
        }}
      ></div>
      {/* Left Section: Feedback Heading */}
      <div className="relative z-10 text-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <motion.h2
          className="text-[#191919] text-6xl font-bold mb-4 font-outline-2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Feedback
        </motion.h2>
        <h3 className="text-2xl font-medium">Our Testimonials</h3>
      </div>

      {/* Right Section: Slider */}
      <div
        className="relative z-10 w-[80%] lg:w-[500px] bg-[#2b2a2a] rounded-tl-[100px] rounded-br-[100px]"
      >
        <FaQuoteLeft className="absolute top-[-30px] left-[30px] text-5xl text-white" />
        <Slider {...sliderSettings}>
          {feedBacks.map((feedback, index) => (
            <div key={index} className="p-8 flex flex-col items-center justify-center">
              <div
                className="relative bg-[#2b2a2a] rounded-tl-[100px] rounded-br-[100px] text-white"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{feedback.name}</h3>
                  </div>
                </div>
                <div className="flex">
                  {feedback.stars.map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500" />
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#B80024]">
                  {feedback.title}
                </h4>
                <p className="text-gray-300">{feedback.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBackSection;
