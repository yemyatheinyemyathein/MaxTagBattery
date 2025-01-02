import React from "react";

const FilterComponent = ({
  categoryFilter,
  setCategoryFilter,
  tagFilter,
  setTagFilter,
  priceFilter,
  setPriceFilter,
}) => {
  const filterTypes = ["accessories", "maxtag"];
  const productTags = ["accessories", "battery", "holder", "TnG Card"];

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    setTagFilter([]);
  };

  const handleTagFilter = (tag) => {
    setTagFilter((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [tag]
    );
    setCategoryFilter("");
  };

  return (
    <div className="w-1/4 hidden lg:block">
    <div className="mb-6 shadow py-3 px-6">
      <div className="relative">
        <h2 className="font-bold text-[#950420] mb-2">
          Product Categories
        </h2>
        <div className="absolute w-10 h-[2px] bg-[#950420]"></div>
      </div>

      <ul className="mt-4">
        {filterTypes.map((type) => (
          <li key={type}>
            <button
              className={`text-xs mb-1 ${
                categoryFilter === type ? "font-bold" : ""
              }`}
              onClick={() => handleCategoryFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6 shadow py-3 px-6">
      <div className="relative">
        <h2 className="font-bold text-[#950420] mb-2">Filter by Price</h2>
        <div className="absolute w-10 h-[2px] bg-[#950420]"></div>
      </div>
      <input
        type="range"
        min="0"
        max="300"
        step={50}
        value={priceFilter.max}
        onChange={(e) =>
          setPriceFilter({ ...priceFilter, max: Number(e.target.value) })
        }
        className="custom-range"
      />

      <p className="text-xs font-bold">
        Price:{" "}
        <span className="text-[#950420] text-xs">
          {" "}
          RM{priceFilter.min} - RM{priceFilter.max}{" "}
        </span>
      </p>
    </div>

    <div className="mb-6 shadow py-3 px-6">
      <div className="relative">
        <h2 className="font-bold text-[#950420] mb-2">Product Tags</h2>
        <div className="absolute w-10 h-[2px] bg-[#950420]"></div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {productTags.map((tag) => (
          <button
            key={tag}
            className={`px-2 py-1 text-xs border rounded-full ${
              tagFilter.includes(tag) ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleTagFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </div>
  );
};

export default FilterComponent;
