import React, { useState } from "react";
import Icon01 from "../../assets/RepairIcon01.png";
import Icon02 from "../../assets/RepairServiceIcon02.jpg";
import Icon03 from "../../assets/RepairServiceIcon03.jpg";
import ListAnimation from "../ListAnimation";
import { motion } from "framer-motion";
import RepairDetails from "../../assets/repairSerrviceDetails.png";

const RepairServiceCompo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  const lists = [
    {
      number: "01",
      name: (
        <span className="text-[24px] md:text-[28px] lg:text-[32px] font-bold">
          Repair Services Helpline <br /> 016-68284
        </span>
      ),
      description: (
        <p className="text-[#7A7A7A]">
          WhatsApp on Repair Service Helpline to make repair <br /> service
          booking.
        </p>
      ),
      icon: (
        <motion.img
          src={Icon01}
          alt={"01"}
          className="w-[120px] md:w-[150px] lg:w-[200px]"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      ),
    },
    {
      number: "02",
      name: (
        <span className="flex justify-end text-end text-[24px] md:text-[28px] lg:text-[32px] font-bold">
          Pay via DuitNow or Online <br /> Transfer
        </span>
      ),
      description: (
        <p className=" text-end font-semibold text-[#7A7A7A]">
          Beneficiary Name: Basset Sdn Bhd <br /> Bank Name: RHB Bank Berhad
          <br /> Account Number: 2-12200-0007048-4
        </p>
      ),
      icon: (
        <motion.img
          src={Icon02}
          alt={"02"}
          className="w-[120px] md:w-[150px] lg:w-[200px]"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      ),
    },
    {
      number: "03",
      name: "Send us your faulty device",
      description: (
        <p className="text-[#7A7A7A]">
          We able to receive the faulty devices via Drop off / Courier <br />{" "}
          Service.
        </p>
      ),
      icon: (
        <motion.img
          src={Icon03}
          alt={"03"}
          className="w-[120px] md:w-[150px] lg:w-[200px]"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      ),
    },
  ];
  return (
    <div className="bg-white h-full text-black px-16">
      {/* head  */}
      <div className="text-center pt-12">
        <p className="text-[#950240] text-4xl font-semibold mb-4">
          How to book for Maxtag Repair Services?
        </p>
        <p className="text-[#7A7A7A]">
          Follow these steps before you send us your faulty devices!
        </p>
      </div>

      {/* list of explanation */}
        <ListAnimation List={lists} BgAnimationOn={false} />

      {/* part of about  */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 text-[#7A7A7A] text-[16px]">
        {/* Via Drop-Off Section */}
        <div className="flex-1 space-y-4 p-6">
          <h3 className="text-[25px] font-bold text-[#BB0024] text-center">Via Drop-Off</h3>
          <div className="text-gray-700 space-y-4">
            <p>Walk in to Basset Sdn Bhd to drop your faulty device.</p>
            <p>
              <strong className="text-[#BB0024]">Address –</strong> 32, Jalan SS26/13, Taman Mayang Jaya,
              47301 Petaling Jaya, Selangor.
            </p>
            <p>
              <strong className="text-[#BB0024]">Office Business Hour –</strong> Monday to Friday, 9.00 AM
              – 5.00 PM. <br />
              The office is closed for lunch between the hours of 1.00 PM – 2.00
              PM.
            </p>
            <p>
              <strong className="text-[#BB0024]">*Note –</strong> Please make arrangements ahead of time if
              you think you might arrive during the lunch hour.
            </p>
          </div>
        </div>

        {/* Via Courier Service Section */}
        <div className="flex-1 space-y-4 p-6">
          <h3 className="text-[25px] font-bold text-[#BB0024] text-center">
            Via Courier Service
          </h3>
          <div className="text-gray-700 space-y-4">
            <p>
              Write your full details on the consignment note including your
              contact number and address to return back the MaxTag.
            </p>
            <ol className="list-decimal list-inside pl-4 space-y-1">
              <li className="text-[#BB0024]">
                <strong>Write down your MaxTag problem.</strong>
              </li>
              <li className="text-[#BB0024]">
                <strong>Ensure that your MaxTag is well protected.</strong>
              </li>
            </ol>
            <p>
              <strong className="text-[#BB0024]">*Note –</strong> Basset Sdn. Bhd. will not be liable for
              any damaged or lost device caused during posting.
            </p>
          </div>
        </div>
      </div>

      {/* image part  */}
      <div className="w-full sm:w-[80%] flex justify-center my-6 mx-auto">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={RepairDetails}
            alt="MaxTag Repair Service"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* form */}
      <div className="max-w-2xl mx-auto mt-12 p-10 bg-[#BB0024] shadow-md rounded-2xl">
        <h2 className="text-3xl text-white font-semibold mb-8">
          Book Your MaxTag Repair Service Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              id="form-field-name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <input
                type="email"
                name="email"
                id="form-field-email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                id="form-field-phone"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9()#&amp;+*-=.]"
                title="Only numbers and phone characters (#, -, *, etc) are accepted."
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              id="form-field-message"
              rows="8"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Tell us your MaxTag issues. You may upload some images to show us the damaged parts. (Only jpg, jpeg, png files allowed and must below 5MB)"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <input
              type="file"
              name="images"
              id="form-field-images"
              className="w-full p-3"
              multiple
              onChange={handleChange}
              accept="image/jpg, image/jpeg, image/png"
            />
          </div>

          <div className="text-center w-full">
            <button
              type="submit"
              className="w-full px-8 py-3 bg-white text-[#BB0024] font-bold rounded-lg transition-all"
            >
              Send a request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RepairServiceCompo;
