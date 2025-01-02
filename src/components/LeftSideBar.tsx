import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

// Declare types for props and state
interface MenuItem {
  title: string;
  href: string;
  subMenu: Array<{ title: string; href: string }>;
}

interface LeftSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    // Load expandedItems from localStorage when the component mounts
    const storedExpandedItems = JSON.parse(localStorage.getItem("expandedItems") || "{}");
    setExpandedItems(storedExpandedItems);

    // Load activeItem from localStorage when the component mounts
    const storedActiveItem = localStorage.getItem("activeItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  useEffect(() => {
    // Store expandedItems in localStorage whenever they change
    localStorage.setItem("expandedItems", JSON.stringify(expandedItems));
  }, [expandedItems]);

  useEffect(() => {
    // Store activeItem in localStorage whenever it changes
    if (activeItem) {
      localStorage.setItem("activeItem", activeItem);
    }
  }, [activeItem]);

  const toggleSubMenu = (index: number) => {
    setExpandedItems((prevState) => {
      const newState = { ...prevState, [index]: !prevState[index] };

      // Collapse other submenus when one is expanded
      Object.keys(newState).forEach((key) => {
        if (key !== index.toString()) {
          newState[key] = false;
        }
      });

      return newState;
    });
  };

  const menuItems: MenuItem[] = [
    { title: "Home", href: "/", subMenu: [] },
    {
      title: "Shop",
      href: "/shop",
      subMenu: [
        { title: "Shop All", href: "/shop" },
        { title: "MaxTag", href: "/maxtag" },
        { title: "MaxTag User Guideline", href: "/user-guide" },
        { title: "Rechargeable Battery", href: "/rechargeable-battery-page" },
        { title: "Dashboard Holder", href: "/dashboard-holder" },
      ],
    },
    { title: "Outlets", href: "/outlet-2", subMenu: [] },
    { title: "Order Tracking", href: "/order-tracking", subMenu: [] },
    { title: "Repair Services", href: "/repair", subMenu: [] },
    {
      title: "About Us",
      href: "/about-us",
      subMenu: [
        { title: "FAQ", href: "/faq" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
    { title: "User Guideline", href: "/user-guide", subMenu: [] },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#000] text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 overflow-hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end items-center px-4 py-3">
          <FiX
            className="text-white text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Links */}
        <div className="h-full overflow-y-auto scrollbar-hide">
          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li key={index} className="px-4 py-2">
                {/* Link or Dropdown Toggle */}
                <div
                  className={`flex justify-between items-center cursor-pointer ${
                    item.subMenu.length ? "pr-2" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(item.title);
                    if (item.subMenu.length) {
                      toggleSubMenu(index);
                    }
                  }}
                >
                  <a
                    href={item.href}
                    className={`text-white ${
                      activeItem === item.title ? "text-red-500 font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                  {item.subMenu.length > 0 && (
                    <span className="text-white text-lg">
                      {expandedItems[index] ? "-" : "+"}
                    </span>
                  )}
                </div>

                {/* Smooth Dropdown Submenu */}
                {item.subMenu.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      expandedItems[index]
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-2 pl-4 space-y-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="hover:bg-gray-700">
                          <a href={subItem.href} className="text-gray-400">
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
