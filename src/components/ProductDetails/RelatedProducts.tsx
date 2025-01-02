import React from "react";
import { productsData } from "../../utils/data";
import { FaEye, FaHeart, FaRandom } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
    const navigate = useNavigate();
  
    const handleAddToCart = (product) => {
      navigate(`/shop/${product.id}`)
    }
  return (
    <>
    <h2 className="text-center text-[#950420] text-[30px] font-bold py-12 ">Related Products</h2>
    <div
      className={`px-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {" "}
      {productsData.slice(0,4).map((product) => (
        <div
          key={product.id}
          onClick={() => handleAddToCart(product)}
          className={`cursor-pointer rounded-md`}
        >
          <div className="flex justify-center items-center relative group overflow-hidden">
            <img
              src={product.productImg}
              alt={product.productName}
              className={`w-40 h-40 object-content mb-2`}
            />
            {product.stockStatus === "OUT OF STOCK" && (
              <div className="w-[40%] h-[30%] mx-auto absolute top-1/2 -translate-y-1/2 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="px-2 text-white font-semibold text-xs text-center">
                  OUT OF STOCK
                </span>
              </div>
            )}
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
          </div>

          <div className={`p-4 text-center space-y-2`}>
            <h3 className="text-[#950420] text-sm text-center">
              {product.productName}{" "}
              {product.stockStatus === "READY STOCK" &&
                `[${product.stockStatus}]`}
            </h3>
            <p className="text-lg font-semibold text-[#950420]">
              RM{product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default RelatedProducts;
