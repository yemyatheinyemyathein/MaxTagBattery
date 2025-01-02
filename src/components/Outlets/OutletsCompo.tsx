import React from "react";

const OutletsCompo = () => {
  return (
    <div className="bg-white h-full text-black px-16">
      <h2 className="font-bold text-[35px] text-[#950420] pt-24">Outlets</h2>
      <div className="flex flex-col justify-center items-center my-4">
        <h2 className="text-[#2B2B2B] font-bold text-[50px]">
          Explore our outlet's location.
        </h2>
        <div className="w-full py-12">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1q1RHIqbYEXag3Z5_9gFC5QaNwGF7V_o&amp;ehbc=2E312F&amp;noprof=1"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Embedded Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OutletsCompo;
