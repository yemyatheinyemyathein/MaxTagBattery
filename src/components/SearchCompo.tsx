import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon

const sampleData = [
  {
    id: 1,
    title: "Christmas Bundles - Touch n Go Toll [READY STOCK]",
    price: "RM249.80",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "Blue - MaxTag Touch n Go Toll [READY STOCK]",
    price: "RM195.00",
    image: "https://via.placeholder.com/50",
  },
  // Add more sample items here
];

const SearchCompo = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    setIsLoading(true); // Start loading when typing

    setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredData([]);
      } else {
        const results = sampleData.filter((item) =>
          item.title.toLowerCase().includes(searchQuery)
        );
        setFilteredData(results);
      }
      setIsLoading(false); // Stop loading after search
    }, 500); // Simulate a delay
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full h-full fixed inset-0 z-50 flex items-center justify-center text-[#7A7A7A]"
    >
      <div className="bg-white w-full min-h-[100vh] flex flex-col justify-start items-center p-6 pt-56">
        <button
          className="p-2 border border-[#7A7A7A] rounded-full absolute top-4 right-4 text-gray-600 hover:text-black font-bold text-sm"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="w-full max-w-xl relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full p-4 text-sm rounded bg-gray-100 border focus:border-[#BB0024] focus:outline-none transition duration-200 ease-in-out"
            />
            {/* Search Icon / Spinner */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
              {isLoading ? (
                <ImSpinner2 className="text-[#BB0024] animate-spin text-lg" />
              ) : (
                <FiSearch className="text-[#BB0024] text-lg" />
              )}
            </div>
          </div>
          <div className="mt-4 bg-white shadow rounded max-h-80 overflow-y-auto text-[#BB0024]">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 hover:bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 mr-3 rounded"
                />
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="font-bold">{item.price}</p>
                </div>
              </div>
            ))}
            {filteredData.length === 0 && query && (
              <p className="text-center p-3 text-[#BB0024] text-sm">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchCompo;
