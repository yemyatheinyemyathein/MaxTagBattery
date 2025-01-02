import React, { useState } from "react";

const WishlistCompo = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyClick = () => {
    const inputValue = document.getElementById("wishlist-link").value;
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        setCopySuccess("Copied to clipboard!");
        alert("The link has been copied!");
      })
      .catch((err) => {
        setCopySuccess("Failed to copy!");
        alert("Failed to copy the link!");
      });
  };

  return (
    <div className="bg-white h-full text-black px-4 md:px-16 py-8">
      <p className="text-base md:text-lg">
        There are no products on the Wishlist!
      </p>
      <div className="flex items-center w-full py-12">
        <p>Wishlist Link :</p>
        <div className="ml-4">
          <input
            id="wishlist-link"
            type="text"
            value="https://maxtag.com.my/wishlist/VT7T6Z"
            className="border-2 border-gray-200 p-2 sm:p-4 rounded-md"
            readOnly
          />
          <button
            onClick={handleCopyClick}
            className="p-2 sm:p-4 px-4 sm:px-8 text-white font-bold bg-[#BB0024] rounded"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCompo;
