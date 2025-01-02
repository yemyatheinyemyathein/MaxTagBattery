import React from "react";
import { FaTh, FaList, FaHeart, FaRandom, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductComponent = ({
  products,
  viewMode,
  setViewMode,
  sortOrder,
  setSortOrder,
}) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate(`/shop/${product.id}`);
  };
  const handleAddToWaitlist = (product) => {
    navigate(`/shop/${product.id}`);
  };

  return (
    <div className="w-full px-4 py-2">
      <div className="flex justify-between items-center text-xs">
        <div className="flex gap-2 mb-4">
          <button className="mr-2" onClick={() => setViewMode("grid")}>
            <FaTh />
          </button>
          <button onClick={() => setViewMode("list")}>
            <FaList />
          </button>

          <select
            className="p-2 focus:border-none focus:outline-none shadow text-[#950420] text-sm ml-4 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ascending">Order Ascending</option>
            <option value="descending">Order Descending</option>
          </select>
        </div>
        <p className="text-[#950420]">Showing {products.length} results</p>
      </div>

      <div
        className={`grid gap-4
        ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleAddToCart(product)}
            className={`rounded-md ${
              viewMode === "list" ? "flex items-center gap-4" : ""
            }`}
          >
            <div className="relative group overflow-hidden">
              <img
                src={product.productImg}
                alt={product.productName}
                className={`${
                  viewMode === "list" ? "w-40 h-40" : "w-full h-40"
                } object-content mb-2`}
              />
              {product.discount && (
                <div className="w-12 h-12 text-sm rounded-full flex justify-center items-center absolute top-2 right-2 bg-[#EF3636] text-white font-semibold">
                    - {product.discount + "%"}
                </div>
              )}
              {product.stockStatus === "OUT OF STOCK" && (
                <div className="w-[60%] h-[40%] mx-auto absolute top-1/2 -translate-y-1/2 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="px-2 text-white font-semibold text-xs text-center">
                    OUT OF STOCK
                  </span>
                </div>
              )}

              {/* Icons on hover */}
              {viewMode !== "list" && (
                <div className="mx-auto absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-white w-[60%] h-12 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="p-1 border-2 border-[#7A7A7A] rounded-full text-[#7A7A7A] hover:text-black">
                    <FaHeart size={15} />
                  </button>
                  <button className="p-1 border-2 border-[#7A7A7A] rounded-full text-[#7A7A7A] hover:text-black">
                    <FaRandom size={15} />
                  </button>
                  <button className="p-1 border-2 border-[#7A7A7A] rounded-full text-[#7A7A7A] hover:text-black">
                    <FaEye size={15} />
                  </button>
                </div>
              )}
            </div>

            <div
              className={`p-4 ${
                viewMode === "list" ? "text-left" : "text-center"
              } space-y-2`}
            >
              <h3 className="text-[#950420] text-sm text-center">
                {product.productName}{" "}
                {product.stockStatus === "READY STOCK" &&
                  `[${product.stockStatus}]`}
              </h3>
              <p className="text-lg font-semibold text-[#950420]">
                RM{product.price.toFixed(2)}
              </p>
              {viewMode === "list" && (
                <ul className="text-left text-sm text-gray-700 mb-1 list-disc pl-5">
                  {product.isMoreOptions
                    ? product.options.types.map((type, index) => (
                        <li key={index}>{type}</li>
                      ))
                    : product.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                </ul>
              )}

              {product.isMoreOptions ? (
                <div
                  className={`flex ${
                    viewMode !== "list" ? "justify-center" : "justify-start"
                  } items-center gap-2`}
                >
                  {product.stockStatus !== "OUT OF STOCK" && (
                    <button
                      onClick={() => handleSelectOptions(product)}
                      className="text-xs bg-[#BB0024] text-white font-semibold px-4 py-3 rounded"
                    >
                      Select Options
                    </button>
                  )}
                  {/* Icons with hover text */}
                  {viewMode == "list" && (
                    <>
                      <div className="relative group">
                        <button className="p-2 hover:border border-[#BB0024] rounded">
                          <FaHeart className="text-[#BB0024]" />
                        </button>
                        <div className="w-[100px] text-center absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Add to Wishlist
                        </div>
                      </div>

                      <div className="relative group">
                        <button className="p-2 hover:border border-[#BB0024] rounded">
                          <FaRandom className="text-[#BB0024]" />
                        </button>
                        <div className="w-[100px] text-center absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Compare
                        </div>
                      </div>

                      <div className="relative group">
                        <button className="p-2 hover:border border-[#BB0024] rounded">
                          <FaEye className="text-[#BB0024]" />
                        </button>
                        <div className="w-[100px] text-center absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Quick View
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div
                  className={`flex ${
                    viewMode !== "list" ? "justify-center" : "justify-start"
                  } items-center gap-2`}
                >
                  {product.stockStatus === "OUT OF STOCK" && product.isWait ? (
                    <button
                      onClick={() => handleAddToWaitlist(product)}
                      className="text-xs bg-[#BB0024] text-white font-semibold px-4 py-3 rounded"
                    >
                      {viewMode === "list" ? "Read More" : "Add To Waitlist"}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-xs bg-[#BB0024] text-white font-semibold px-4 py-3 rounded"
                    >
                      Add To Cart
                    </button>
                  )}

                  {/* Icons with hover text */}

                  {viewMode == "list" && (
                    <>
                      <div className="relative group">
                        <button className="p-2 hover:border border-[#BB0024] rounded">
                          <FaHeart className="text-[#BB0024]" />
                        </button>
                        <div className="w-[100px] text-center absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Add to Wishlist
                        </div>
                      </div>

                      <div className="relative group">
                        <button className="p-2 hover:border border-[#BB0024] rounded">
                          <FaEye className="text-[#BB0024]" />
                        </button>
                        <div className="w-[100px] text-center absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Quick View
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
