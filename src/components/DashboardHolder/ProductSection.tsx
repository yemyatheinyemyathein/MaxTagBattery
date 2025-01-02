import React from "react";
import { motion } from "framer-motion";
import Product01 from "../../assets/product2.png";
const ProductSection = () => {
  const products = [
    {
      id: 16759,
      name: "Dashboard Holder (Ver 2.0)",
      image: Product01,
      price: "RM 15.00",
      link: "/shop/3",
    },
    {
      id: 16760,
      name: "Smart Tag Holder (Ver 3.0)",
      image: Product01,
      price: "RM 20.00",
      link: "/shop/3",
    },
    {
      id: 16760,
      name: "Smart Tag Holder (Ver 3.0)",
      image: Product01,
      price: "RM 20.00",
      link: "/shop/3",
    },
    // Add more product objects here...
  ];

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="space-y-8 py-12 flex flex-col justify-center items-center">
      {/* Section Header */}
      <div>
        <div className="text-center pt-6 tracking-widest">
          <h2 className="text-md font-thin uppercase">Buy It Now</h2>
        </div>
        <motion.h1
          className="text-[50px] text-black font-bold text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Choose Model
        </motion.h1>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
        {/* Map through the products array to generate product items */}
        {products.map((product) => (
          <div
            key={product.id}
            className="mt-4 mx-auto rounded-lg transition-transform hover:scale-105"
          >
            <div className="relative flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-auto rounded-lg"
              />
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-[18px] font-semibold text-[#950420]">
                {product.name}
              </h3>
              <p className="text-[20px] text-[#2B2B2B] font-semibold py-4">{product.price}</p>
              <div className="mt-4">
                <a
                  href={product.link}
                  className="bg-[#BB0024] text-white py-3 px-6 font-bold  transition duration-300"
                  aria-label={`Add to cart: ${product.name}`}
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
