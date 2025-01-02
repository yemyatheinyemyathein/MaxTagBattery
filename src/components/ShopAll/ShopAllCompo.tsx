import React, { useState } from "react";
import Filters from "./FilterComponent";
import ProductList from "./ProductComponent";
import { productsData } from "../../utils/data";

const ShopAllCompo = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 300 });
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tagFilter, setTagFilter] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  const filteredProducts = productsData
    .filter(
      (product) =>
        product.price >= priceFilter.min &&
        product.price <= priceFilter.max &&
        (categoryFilter ? product.productType === categoryFilter : true) &&
        (tagFilter.length > 0
          ? tagFilter.some((tag) => product.productTag.includes(tag))
          : true)
    )
    .sort((a, b) => {
      if (sortOrder === "ascending") return a.price - b.price;
      if (sortOrder === "descending") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-white text-[#7A7A7A] px-24 py-12">
      <div className="flex gap-4">
        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />
        <ProductList
          products={filteredProducts}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
    </div>
  );
};

export default ShopAllCompo;
