import React from "react";
import BannerThing1 from "../../assets/dashboard-holder-png-1.png";
import BannerThing2 from "../../assets/dashboard-holder-png-2.png";
import BannerShape01 from "../../assets/BannerShape01.png";
import Arrow from "../../assets/Arrow-shape.png";

const HomeBanner = () => {
  return (
    <div className="min-h-[100vh] lg:px-8 px-0 py-2 flex flex-wrap justify-center 2xl:pt-32 md:pt-20 pt-2 overflow-hidden">
      {/* Main Content */}
      <div className="relative w-full md:w-[48%] lg:w-[58%] mb-8 md:mb-0 flex justify-center items-center sm:justify-start sm:items-start">
        <div className="mx-8 2xl:text-left lg:text-left text-center sm:text-left">
          <div className="relative">
            <img
              src={BannerShape01}
              alt="Banner Shape"
              className="absolute -top-6 -left-2 2xl:w-[100px] lg:w-[70px] w-[50px]"
            />

            <span className="relative ml-8 md:ml-8 lg:ml-12 2xl:ml-16 md:ml-0 tracking-wider block text-[clamp(25px,3vw,42px)] 2xl:text-[68px] lg:text-[42px] md:text-[35px] font-bold whitespace-nowrap">
              ELECTRONIC TOLL READER
            </span>
          </div>
          <p className="ml-8 md:ml-8 lg:ml-12 2xl:ml-16 md:ml-0 text-[clamp(35px,3vw,70px)] 2xl:text-[100px] lg:text-[70px] md:text-[40px] font-bold text-[#515151] opacity-animation">
            FOR ALL PLAZAS
          </p>
          <p className="ml-8 md:ml-8 lg:ml-12 2xl:ml-16 sm:mx-10 mx-0 tracking-wide sm:mt-14 mt-4 font-thin text-[clamp(18px,2vw,25px)] 2xl:text-[40px]">
            MaxTag saves your time and helps you quicken your journeys through
            Malaysian's toll plazas.
          </p>
          <div className="relative">
            <img
              src={Arrow}
              className="absolute 2xl:-top-24 lg:-top-16 -top-14 left-[30%] sm:left-[20%] md:left-[30%] lg:left-[20%] 2xl:w-[100px] lg:w-[70px] w-[50px] arrow-animation mx-auto"
            />
            <div className="ml-8 lg:ml-12 2xl:ml-16 md:ml-8 3xl:flex 3xl:justify-center 3xl:items-center items-start mt-24 gap-8">
              <button className="2xl:text-3xl lg:text-2xl md:text-xl text-md relative bg-[#B80024] text-white px-8 2xl:px-14 2xl:py-4 lg:px-10 py-2 mr-2 rounded-full font-bold tracking-wide">
                Add To Cart
              </button>
              <button className="2xl:text-3xl lg:text-2xl md:text-xl text-md bg-transparent border-2 border-white text-white px-8 2xl:px-14 2xl:py-4 lg:px-10 py-2 rounded-full tracking-wide font-bold">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <div className="relative w-full md:w-[52%] lg:w-[42%] mx-auto ">
        <p className="font-bold absolute sm:right-0 right-6 text-vertical text-[clamp(70px,8vw,150px)] 2xl:text-[180px] text-[#b80024]">
          MAXTAG
        </p>
        <div className="mx-auto relative left-1/4 sm:left-[20%] md:left-[7rem] lg:left-4 overflow-hidden lg:h-[100vh] h-[400px] animate-banners">
          <img
            src={BannerThing1}
            alt="Banner"
            className="absolute -top-0 left-0 w-[45%] md:w-[60%] lg:w-[400px] 2xl:w-[600px] animate-slide-up"
          />
          <img
            src={BannerThing2}
            alt="Banner"
            className="absolute 2xl:top-[400px] lg:top-[250px] md:top-[200px] top-[180px] -left-0 w-[45%] md:w-[60%] lg:w-[450px] 2xl:w-[600px] animate-slide-down"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
