import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPageCompo = () => {
  return (
    <div className="bg-white text-black ">
      <div className="w-full p-6 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-8">
  {/* Contact Information */}
  <div className="space-y-6">
    <div className="flex sm:flex-row flex-col items-center md:items-start text-center md:text-left border-b-[0.1px] border-[#7A7A7A] pb-10 pt-2">
      <div className="text-[#950420] text-2xl mb-4 md:mr-4 md:mb-0">
        <FaMapMarkerAlt />
      </div>
      <div>
        <h3 className="font-bold text-lg text-[#950420]">
          BASSET SDN. BHD. (519107-V)
        </h3>
        <p className="text-[#7A7A7A] mt-1">
          32, Jalan SS 26/13, Taman Mayang Jaya, 47301 Petaling Jaya, Selangor
        </p>
      </div>
    </div>
    <div className="flex sm:flex-row flex-col items-center md:items-start text-center md:text-left border-b-[0.1px] border-[#7A7A7A] pb-10 pt-2">
      <div className="text-[#950420] text-2xl mb-4 md:mr-4 md:mb-0">
        <FaPhone />
      </div>
      <div>
        <p className="font-semibold text-lg text-[#950420]">
          Tel: +603 7805 2488
          <br />
          Fax: +603 7805 2489
          <br />
          WhatsApp: 016-6681343
        </p>
      </div>
    </div>
    <div className="flex sm:flex-row flex-col items-center md:items-start text-center md:text-left border-b-[0.1px] border-[#7A7A7A] pb-10 pt-2">
      <div className="text-[#950420] text-2xl mb-4 md:mr-4 md:mb-0">
        <FaEnvelope />
      </div>
      <div>
        <h3 className="font-bold text-lg text-[#950420]">Email</h3>
        <p className="text-[#7A7A7A] mt-1">
          <a
            href="mailto:onlinestore@basset.com.my"
            className="text-[#950420] border-b-2 border-[#950420] hover:text-green-800"
          >
            onlinestore@basset.com.my
          </a>
        </p>
      </div>
    </div>
    <div className="flex sm:flex-row flex-col items-center md:items-start text-center md:text-left border-b-[0.1px] border-[#7A7A7A] pb-10 pt-2">
      <div className="text-[#950420] text-2xl mb-4 md:mr-4 md:mb-0">
        <FaClock />
      </div>
      <div>
        <h3 className="font-bold text-lg text-[#950420]">Business Hours</h3>
        <p className="text-[#7A7A7A] mt-1">
          Mon-Fri: 9:00 AM - 5:30 PM
          <br />
          Sat: 9:00 AM - 12:00 PM
        </p>
      </div>
    </div>
  </div>

  {/* Get in Touch Form */}
  <div className="sm:px-0 px-8">
    <h2 className="text-4xl font-bold text-[#950420] mb-6">Get in touch</h2>
    <form className="space-y-6">
      <div>
        <input
          placeholder="Your Name*"
          id="name"
          type="text"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#950420]"
        />
      </div>
      <div>
        <input
          placeholder="Your Email*"
          id="email"
          type="email"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#950420]"
        />
      </div>
      <div>
        <textarea
          id="message"
          placeholder="Your Message*"
          rows="10"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#950420]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#950420] text-white font-medium py-4 rounded-lg hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  </div>
</div>

      </div>

      <div className="w-full bg-red-500 mt-12 bg-white pb-6">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093703!2d144.95373531565453!3d-37.81627944202351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6dd575c8d0!2sGoogle!5e0!3m2!1sen!2sus!4v1677600607812!5m2!1sen!2sus"
          width="100%"
          height="500px"
          style={{
            border: "0",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPageCompo;
