import React from "react";

const UserGuideLineCompo = () => {
  return (
    <div className="bg-white h-full text-black px-16">
      <h2 className="font-bold text-[35px] text-[#950420] pt-24">
        User Guideline
      </h2>
      <div className="flex flex-col justify-center items-center my-4">
        
        <div className="w-full pb-12">
          <iframe
            className="elementor-video"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="MaxTag User Guide"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/FBFCB7Q2N6s?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1"
            id="widget2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UserGuideLineCompo;
