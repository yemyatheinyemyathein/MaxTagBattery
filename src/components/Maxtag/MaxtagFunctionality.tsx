import React from "react";

const MaxtagFunctionality = () => {
  return (
    <div className="bg-white h-full text-black px-16">
      <div className="text-center py-12">
        <p className="text-md font-thin uppercase">HOW IT WORKS</p>
        <h2 className="text-[50px] font-bold text-black">Functionality</h2>
      </div>
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

export default MaxtagFunctionality;
