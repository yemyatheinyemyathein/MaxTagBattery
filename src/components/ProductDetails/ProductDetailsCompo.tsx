import React, { useRef, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaRandom,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import RelatedProducts from "./RelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductDetailsCompo = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product.isMoreOptions == true
      ? product.options?.images[0]
      : product.productImg
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // Default active tab

  const toggleAccordion = (tab) => {
    setActiveTab((prev) => (prev === tab ? "" : tab)); // Toggles between active tab and none
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      1;
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleImageChange = (color) => {
    setSelectedImage(color);
  };
  const imageContainerRef = useRef(null); // For the small images container

  // Handling swipe functionality
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    startX = e.clientX;
    scrollLeft = imageContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (startX) {
      const x = e.clientX;
      const move = x - startX;
      imageContainerRef.current.scrollLeft = scrollLeft - move;
    }
  };

  const handleMouseUp = () => {
    startX = 0;
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = imageContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (startX) {
      const x = e.touches[0].clientX;
      const move = x - startX;
      imageContainerRef.current.scrollLeft = scrollLeft - move;
    }
  };

  const handleTouchEnd = () => {
    startX = 0;
  };

  return (
    <div className="bg-white text-[#7A7A7A] py-12">
      <div className=" px-16 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Product Images */}
        <div>
          {/* Main Image */}
          <div className="w-[500px] rounded-lg border shadow-md">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            ref={imageContainerRef}
            className="select-none mt-4 w-[500px] overflow-x-scroll flex gap-2 cursor-grab scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {product.options?.images.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image}
                  alt={`option-${index}`}
                  className={`w-20 h-20 rounded-lg border cursor-pointer ${
                    selectedColor === image
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleImageChange(image)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right Side - Product Details */}
        <div className="text-left">
          <p
            className={`w-[90px] text-center text-xs ${
              product.stockStatus == "OUT OF STOCK"
                ? "border-[#7A7A7A] text-[#7A7A7A]"
                : "text-[#BB0024] border-[#BB0024]"
            } border`}
          >
            {product.stockStatus}
          </p>
          <h1 className="relative text-[40px] font-bold text-[#950420] leading-tight">
            {product.productName}{" "}
            <span className="text-[30px] font-semibold">
              [{product.stockStatus}]
            </span>
            <span className="text-white w-14 h-14 flex justify-center items-center rounded-full text-sm absolute -top-4 right-4 bg-[#EF3636]">
              -{product.discount}%
            </span>
          </h1>
          <p className="text-xl font-bold mt-4 text-[#950420]">
            RM{product.price}
          </p>
          <div className="mt-4">
            <h3 className="font-bold">
              {product.options?.types?.length > 0
                ? product.options.edition.length > 0
                  ? product.options.edition
                  : "Bundles include:"
                : "Highlights:"}
            </h3>
            <ul className="mt-4">
              {(product.options?.types?.length > 0
                ? product.options.types
                : product.highlights
              )?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {product.options?.addOn.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg">Add-On</h2>
              <div className="flex gap-4 mt-4">
                {product.options?.addOn.map((addOn, index) => (
                  <button
                    key={index}
                    className="mt-2 px-2 py-1 border hover:border-[#950420] text-[#950420]"
                  >
                    {addOn}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.options?.colors.length > 0 && (
            <div className="w-full mt-10">
              <h2 className="text-lg">Color</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.options?.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`px-4 py-1 rounded-md border text-[#950420] ${
                      selectedColor === color ? "border-[#950420]" : ""
                    }`}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          {product.isWait && <div className="text-gray-100 mt-4 w-full bg-gray-400 p-3 text-center font-bold ">OUT OF STOCK</div>}

          {product.isWait !== true ? (
            <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center py-8 border-2">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-md mb-4 md:mb-0">
                <button
                  className="px-4 py-2 bg-gray-100"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-10 text-center border-none outline-none text-[#950420]"
                />
                <button
                  className="px-4 py-2 bg-gray-100"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className={`px-6 py-2 font-bold mb-4 md:mb-0 bg-[#BB0024] text-white ${
                  product.stockStatus === "OUT OF STOCK"
                    ? "bg-opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={product.stockStatus === "OUT OF STOCK"}
              >
                Add to Cart
              </button>

              {/* Action Buttons (Heart & Random) */}
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-0">
                <button className="p-1 border-2 border-[#7A7A7A] rounded-full text-[#7A7A7A] hover:text-black">
                  <FaHeart size={15} />
                </button>
                <button className="p-1 border-2 border-[#7A7A7A] rounded-full text-[#7A7A7A] hover:text-black">
                  <FaRandom size={15} />
                </button>
              </div>
            </div>
          ) : (
            <button
              className={`mt-4 px-6 py-2 font-bold mb-4 md:mb-0 bg-[#BB0024] text-white`}
            >
              Add to Waitlist
            </button>
          )}

          <div className="mt-4 text-sm text-gray-500 space-y-3">
            <p className="text-[#950420]">
              SKU: <span className="text-[#7A7A7A]">{product.sku}</span>
            </p>
            <p className="text-[#950420]">
              Category:{" "}
              <span className="text-[#7A7A7A]">{product.productType}</span>
            </p>
            {product.productTag.length > 0 && (
              <p className="text-[#950420] flex">
                Tags:{" "}
                <div className="ml-2 text-[#7A7A7A] flex space-x-2">
                  {product.productTag.map((a, index) => (
                    <span key={index}>{a}</span>
                  ))}
                </div>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto mt-12 px-2">
        {/* Tabs or Accordion */}
        <div className="md:hidden">
          {/* Accordion for medium and smaller screens */}
          <div className="space-y-2">
            {/* Description Accordion */}
            <div className="border rounded-md">
              <button
                className="text-lg w-full text-left px-4 py-2 font-bold border-b text-[#950420] flex justify-between items-center"
                onClick={() => toggleAccordion("description")}
              >
                Description
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeTab === "description" ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "description" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </motion.div>
              </button>
              {activeTab === "description" && (
                <div className="px-4 py-2">
                  <p>
                    This is the description content. Add your product or page
                    details here.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Information Accordion */}
            <div className="border rounded-md">
              <button
                className="text-lg w-full text-left px-4 py-2 font-bold border-b text-[#950420] flex justify-between items-center"
                onClick={() => toggleAccordion("additional-info")}
              >
                Additional Information
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: activeTab === "additional-info" ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "additional-info" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </motion.div>
              </button>
              {activeTab === "additional-info" && (
                <div className="px-4 py-2">
                  <table className="table-auto w-full border">
                    <tbody>
                      <tr>
                        <td className="p-4 font-bold border text-[#950420]">
                          Weight
                        </td>
                        <td className="p-4 border">300 g</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold border text-[#950420]">
                          Dimensions
                        </td>
                        <td className="p-4 border">11 × 10 × 8 cm</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold border text-[#950420]">
                          Color
                        </td>
                        <td className="p-4 border">
                          Basic Black, Blue, Red, Blue Daisy, Green, Yellow,
                          Lavender, Pink
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Reviews Accordion */}
            <div className="border rounded-md">
              <button
                className="text-lg w-full text-left px-4 py-2 font-bold border-b text-[#950420] flex justify-between items-center"
                onClick={() => toggleAccordion("reviews")}
              >
                Reviews
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeTab === "reviews" ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "reviews" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </motion.div>
              </button>
              {activeTab === "reviews" && (
                <div className="mx-auto mt-4 p-2 w-[100%] flex justify-between items-center gap-4 flex-wrap">
                  <div className="relative w-full bg-blue-400 text-white p-4 ">
                    <p>There are no reviews yet!</p>
                    <div className="absolute w-[10px] h-full bg-blue-500 top-0 left-0" />
                  </div>
                  <div className="w-full">
                    <p>Only Logged in customer can give review.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs for larger screens */}
        <div className="hidden md:flex justify-center space-x-8 border-b">
          <motion.button
            className={`pb-2 font-bold text-[20px] text-[#950420]`}
            onClick={() => handleTabClick("description")}
            initial={{ borderBottomWidth: 0 }}
            animate={{
              borderBottomWidth: activeTab === "description" ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              borderBottomColor:
                activeTab === "description" ? "#950420" : "transparent",
            }}
          >
            Description
          </motion.button>
          <motion.button
            className={`pb-2 font-bold text-[20px] text-[#950420]`}
            onClick={() => handleTabClick("additional-info")}
            initial={{ borderBottomWidth: 0 }}
            animate={{
              borderBottomWidth: activeTab === "additional-info" ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              borderBottomColor:
                activeTab === "additional-info" ? "#950420" : "transparent",
            }}
          >
            Additional Information
          </motion.button>
          <motion.button
            className={`pb-2 font-bold text-[20px] text-[#950420]`}
            onClick={() => handleTabClick("reviews")}
            initial={{ borderBottomWidth: 0 }}
            animate={{
              borderBottomWidth: activeTab === "reviews" ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              borderBottomColor:
                activeTab === "reviews" ? "#950420" : "transparent",
            }}
          >
            Reviews
          </motion.button>
        </div>

        {/* Tab Content */}
        <div className="hidden md:flex py-10">
          {activeTab === "description" && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <p>
                This is the description content. Add your product or page
                details here.
              </p>
            </motion.div>
          )}
          {activeTab === "additional-info" && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full"
            >
              <table className="table-auto w-full border">
                <tbody>
                  <tr>
                    <td className="p-4 font-bold border text-[#950420]">
                      Weight
                    </td>
                    <td className="p-4 border">300 g</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border text-[#950420]">
                      Dimensions
                    </td>
                    <td className="p-4 border">11 × 10 × 8 cm</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border text-[#950420]">
                      Color
                    </td>
                    <td className="p-4 border">
                      Basic Black, Blue, Red, Blue Daisy, Green, Yellow,
                      Lavender, Pink
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          )}
          {activeTab === "reviews" && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full flex justify-between items-center gap-4"
            >
              <div className="relative w-full bg-blue-400 text-white p-4">
                <p>There are no reviews yet!</p>
                <div className="absolute w-[10px] h-full bg-blue-500 top-0 left-0" />
              </div>
              <div className="w-full">
                <p>Only Logged in customer can give review.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
};

export default ProductDetailsCompo;
