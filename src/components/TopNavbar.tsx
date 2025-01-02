import React, { useState, useEffect } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import LeftSidebar from "./LeftSideBar";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { AnimatePresence } from "framer-motion";
import SearchCompo from "./SearchCompo";

// ImageLink Component
const ImageLink = ({ href, src, alt }) => (
  <a href={href} className="block">
    <img src={src} alt={alt} className="w-[130px]" />
  </a>
);

// MenuItem Component
const MenuItem = ({ title, href, subMenu, isActive, onClick }) => (
  <li
    className={`flex justify-center items-center relative ${
      subMenu && subMenu.length > 0 ? "group" : ""
    } ${isActive ? "text-red-500" : ""}`}
  >
    <a
      href={href}
      onClick={onClick}
      className="tracking-wide text-[11px] font-bold text-white px-3 py-2 hover:text-red-500 transition-colors"
    >
      {title}
      {subMenu && subMenu.length > 0 && <span className="ml-1">+</span>}
    </a>
    {subMenu && subMenu.length > 0 && (
      <ul className="py-2 absolute top-12 left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-[260px]">
        {subMenu.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="font-bold text-[11px] block px-4 py-2 text-[#b80024]"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

// Cart Component
const Cart = ({ openCart }) => (
  <div className="relative flex items-center">
    <Link className="hidden lg:flex relative mr-4" to={"/wishlist"}>
      <FiHeart className="text-white text-2xl" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
        0
      </span>
    </Link>
    <div onClick={openCart} className="relative">
      <FiShoppingCart className="text-white text-2xl" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
        0
      </span>
    </div>
  </div>
);

// Account Component
const Account = () => (
  <a
    href="/my-account/"
    className="text-sm font-bold text-white hover:text-red-500 transition-colors flex items-center"
  >
    <span className="w-[105px]">Login / Register</span>
  </a>
);

// Search Component
const Search = ({ onClick }) => {
  return (
    <div>
      <button
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={onClick}
      >
        <FiSearch />
      </button>
    </div>
  );
};
// Main Header Component
const TopNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    localStorage.getItem("activeMenu") || "Home"
  );
  const [isCartOpen, setCartOpen] = useState(false); // State to toggle the cart visibility
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleClose = () => {
    setSearchOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (title) => {
    setActiveMenu(title);
    localStorage.setItem("activeMenu", title);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const menuItems = [
    { title: "Home", href: "/" },
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
    { title: "Outlets", href: "/outlet-2" },
    { title: "Order Tracking", href: "/order-tracking" },
    { title: "Repair Services", href: "/repair" },
    {
      title: "About Us",
      href: "/about-us",
      subMenu: [
        { title: "FAQ", href: "/faq" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
    { title: "User Guideline", href: "/user-guide" },
  ];

  const dynamicBgColor = location.pathname === "/" ? "[#191919]" : "[#2B2B2B]";

  return (
    <>
      <div className="w-full h-[35px] bg-[#b80024] z-0"></div>
      <div
        className={`bg-${dynamicBgColor} sticky -top-1 z-50 backdrop-blur-2xl min-w-full container flex items-center justify-between px-6 py-2 md:flex md:justify-between lg:hidden`}
      >
        <FiMenu
          className="text-white text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <ImageLink href="/" src={Logo} alt="Maxtag logo" />
        <Cart openCart={openCart} />
      </div>
      <LeftSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header
        className={`bg-${dynamicBgColor} sticky -top-1 z-50 backdrop-blur-2xl flex px-[clamp(1rem,2vw,4rem)] lg:px-[clamp(2rem,1vw,8rem)] 2xl:px-72`}
      >
        <div className="hidden lg:flex container mx-auto justify-between items-center">
          <nav className="flex gap-4">
            <ImageLink href="/" src={Logo} alt="Maxtag logo" />
            <ul className="flex">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  title={item.title}
                  href={item.href}
                  subMenu={item.subMenu}
                  isActive={activeMenu === item.title}
                  onClick={() => handleMenuClick(item.title)}
                />
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <Account />
            <Search onClick={handleSearchClick} />
            <Cart openCart={openCart} />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isSearchOpen && <SearchCompo onClose={handleClose} />}
      </AnimatePresence>
      <ShoppingCart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
};

export default TopNavbar;
