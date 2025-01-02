import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutReviewOrder from "./CheckoutReviewOrder";

const CheckoutCompo = () => {
  return (
    <div className="w-full bg-white text-[#7A7A7A] flex flex-wrap items-start justify-center md:justify-between gap-6 md:gap-2 mx-auto px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-12 min-h-screen">
      <div className="w-full md:w-[48%] flex justify-center">
        <CheckoutForm />
      </div>
      <div className="w-full md:w-[48%] flex justify-center">
        <CheckoutReviewOrder />
      </div>
    </div>
  );
};

export default CheckoutCompo;
