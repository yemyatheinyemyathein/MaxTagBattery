import React from "react";
import { motion } from "framer-motion";

const ShoppingCart = ({ isOpen, closeCart }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          onClick={closeCart} // Close cart when clicking on the backdrop
        />
      )}

      {/* Shopping Cart */}
      <motion.div
        className="fixed top-0 right-0 bg-white w-[350px] h-[100vh] z-50 text-black p-4 shadow-lg"
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: isOpen ? 0 : "100%",
          opacity: isOpen ? 1 : 0,
        }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="text-[#950420] flex justify-between items-center mb-6 border-b border-gray-200 pb-6">
          <h2 className="text-xl font-bold">SHOPPING CART</h2>
          <button onClick={closeCart} className="font-bold text-sm">
            CLOSE ×
          </button>
        </div>
        {/* Shopping cart items go here */}
        <div className="flex justify-center items-center flex-col text-lg space-y-4">
          <p>No Products In the Cart</p>
          {/* Add cart item components dynamically */}
        </div>
        <div className="mt-4">
          {/* <button className="w-full bg-red-500 text-white py-2 rounded-md">
            Checkout
          </button> */}
        </div>
      </motion.div>
    </>
  );
};

export default ShoppingCart;
