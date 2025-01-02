import React from "react";
import FooterBackground from "../assets/FooterBackground.png";
import Payments from "../assets/FooterPayments.png";
import LogoDark from "../assets/LogoDark.png";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-10 lg:pb-4 pb-20"
      style={{
        backgroundImage: `url(${FooterBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo and Address */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={LogoDark}
              alt="Maxtag Logo"
              className="w-full md:w-32 mb-4 max-w-xs"
            />
            <p className="text-[#ADADAD]">
              32, Jalan SS 26/13, Taman Mayang Jaya, <br />
              47301 Petaling Jaya, Selangor
            </p>
            <img
              src={Payments}
              alt="iPay88"
              className="w-full md:w-20 mt-4 max-w-xs"
            />
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/home" },
                { name: "About Us", link: "/about-us" },
                { name: "Outlets", link: "/outlet" },
                { name: "Contact", link: "/contact-us" },
                { name: "Repair Service", link: "/services" },
                { name: "FAQ", link: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-[#ADADAD] hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              {[
                { name: "Selling Product", link: "/shop" },
                { name: "My Account", link: "/my-account" },
                { name: "Order Tracking", link: "/order-tracking" },
                { name: "Order Status", link: "/my-account/orders" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-[#ADADAD] hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              {[
                { icon: "fas fa-phone-alt", text: "+603 7805 2488" },
                { icon: "fas fa-fax", text: "+603 7805 2489" },
                { icon: "fab fa-whatsapp", text: "016 6681 343" },
                { icon: "fas fa-envelope", text: "onlinestore@basset.com.my" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start"
                >
                  <i className={`${item.icon} text-[#ADADAD] mr-3`} />
                  <span className="text-[#ADADAD] hover:text-white transition">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:justify-between mt-8 pt-4 text-center text-[#ADADAD] border-t-[0.5px] border-gray-200">
          <div>
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="text-white">Maxtag</span>. All rights reserved.
            </span>
          </div>
          <div>
            <span>
              Designed by <span className="text-white">REI Group</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
