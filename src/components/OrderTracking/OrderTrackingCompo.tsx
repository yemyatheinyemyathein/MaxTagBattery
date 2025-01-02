import React from "react";
import tablet from "../../assets/tablet.png";
import Email from "../../assets/email-1.png";
import TrackTruck from "../../assets/Track-truck.png";
import ListAnimation from "../ListAnimation";
import OrderTrackingIcon from "../../assets/OrderTrackingIcon.png";

const OrderTrackingCompo = () => {
  const lists = [
    {
      number: "01",
      name: "Place Your Order",
      description: "Found in your order confirmation email.",
      icon: tablet,
    },
    {
      number: "02",
      name: "Place Your Billing Email",
      description: "Email you used during checkout.",
      icon: Email,
    },
    {
      number: "03",
      name: "Track Your Order",
      description: "Track all your shipments.",
      icon: TrackTruck,
    },
  ];
  return (
    <div className="bg-white h-full text-black ">
      <div className="hidden md:block">
        <ListAnimation List={lists} BgAnimationOn={true}/>
      </div>
      <div className="px-16 py-12 flex flex-col justify-center items-center text-center">
        <img src={OrderTrackingIcon} className="w-44 sm:w-20 pb-10 " />
        <p>
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
      </div>
      <form className="px-16 pb-12 ">
        <div className="mb-8">
          <label htmlFor="orderID" className="text-[#950240] text-[20px] mb-2">
            Order ID
          </label>
          <input
            id="orderID"
            type="text"
            placeholder="Found in your confirmation email."
            className="focus:outline-none hover:outline-none w-full border border-gray-400 p-3 px-4 mt-2"
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor="billingEmail"
            className="text-[#950240] text-[20px] mb-2"
          >
            Billing email
          </label>
          <input
            id="billingEmail"
            type="text"
            placeholder="Found in your confirmation email."
            className="focus:outline-none hover:outline-none w-full border border-gray-400 p-3 px-4 mt-2"
          />
        </div>
        <button className="p-3 rounded text-sm w-full bg-[#BB0024] font-bold text-white">
          Track
        </button>
      </form>
    </div>
  );
};

export default OrderTrackingCompo;
