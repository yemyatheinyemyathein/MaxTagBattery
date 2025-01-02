import React, { useRef } from "react";
import Battery from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import BgProduct from "../../assets/shape-2.png";
import { motion, useInView } from "framer-motion";

const ProductSection = () => {
  const ProductRef = useRef(null);
  const isInView = useInView(ProductRef, { once: true });

  const products = [
    {
      img: Battery,
      name: "9V Rechargeable Battery",
      description: "Your Eco-Friendly Choice",
      button: "Learn More -->",
    },
    {
      img: Product2,
      name: "Dashboard Holder",
      description: "Dedicated Design for MaxTag / SmartTag",
      button: "Learn More -->",
    },
    {
      img: Product4,
      name: "Other Accessories",
      description: "Elevate your style with accessories",
      button: "Learn More -->",
    },
    {
      img: Product3,
      name: "Repair Service",
      description: "Repair your faulty MaxTag/smartTag devices",
      button: "Reservation -->",
    },
  ];

  return (
    <section className="relative py-16 bg-black" ref={ProductRef}>
      <div className="absolute inset-0 bg-black">
        <img
          src={BgProduct} // Adjust the path if needed
          alt="Background Shape"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h2
            className="text-[70px] font-semibold text-center font-outline-2 text-[#191919]"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2 }}
          >
            Products
          </motion.h2>
          <h2 className="text-4xl font-bold text-center">
            Discover exceptional products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="w-[80%] mx-auto md:w-[220px] h-[400px] bg-[#7A7A7A] bg-opacity-20 text-center rounded-full px-2 py-6 border border-gray-600 hover:border-red-500 relative overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2 }}
            >
              <div className="mb-6">
                <img
                  src={product.img}
                  alt={product.name}
                  className="mx-auto w-36 object-contain"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold my-2">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {product.description}
              </p>
              <button className="text-white px-4 py-2 rounded-full border border-white transition transform hover:animate-shake">
                {product.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
