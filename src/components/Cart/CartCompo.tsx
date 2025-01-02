import React, { useState } from "react";
import CartBattery from "../../assets/cartBattery.png";
import { Link } from "react-router-dom";

const CartCompo = () => {
  const [quantity, setQuantity] = useState(3);
  const [couponCode, setCouponCode] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = (event) => {
    event.preventDefault();
    // Logic to apply coupon
  };

  return (
    <div className="w-full bg-white text-[#7A7A7A] container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Cart Table */}
        <div className="lg:hidden">
          <form className="w-full flex items-start gap-4">
            <img
              src={CartBattery}
              alt="MaxTag USB Type-C Rechargeable Battery"
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-[18px] text-[#950420] font-bold">
                MaxTag USB Type-C Rechargeable Battery
              </h2>
              <div className="space-y-4 mt-8">
                <div className="border-b flex justify-between text-[#950420]">
                  <p className="text-[13px]">PRICE</p>
                  <p className="text-lg font-bold">RM36.00</p>
                </div>
                <div className="border-b flex justify-between text-[#950420]">
                  <p className="text-[13px]">QUANTITY</p>
                  <p className="text-lg font-bold">
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-16 p-2 border rounded"
                      min="0"
                      max="99"
                    />
                  </p>
                </div>
                <div className="border-b flex justify-between text-[#950420]">
                  <p className="text-[13px]">SUBTOTAL</p>
                  <p className="text-lg font-bold"> RM {36.0 * quantity}</p>
                </div>
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded w-full lg:w-auto mt-4 lg:mt-0"
            disabled
          >
            Update cart
          </button>

          <div className="space-y-2 p-4 border mt-8">
            <input
              type="text"
              id="coupon_code"
              value={couponCode}
              onChange={handleCouponChange}
              placeholder="Coupon code"
              className="p-4 border rounded w-full lg:w-64"
            />
            <button
              type="submit"
              onClick={handleApplyCoupon}
              className="bg-black text-white py-3 px-4 rounded w-full lg:w-auto"
            >
              Apply coupon
            </button>
          </div>
        </div>
        <form method="post" className="hidden lg:block w-full lg:w-2/3">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2 text-sm text-left text-[#950420]">
                  Product
                </th>
                <th className="px-4 py-2 text-sm text-left text-[#950420]">
                  Price
                </th>
                <th className="px-4 py-2 text-sm text-left text-[#950420]">
                  Quantity
                </th>
                <th className="px-4 py-2 text-sm text-left text-[#950420]">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    className="text-center border-2 p-2 rounded-full"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-[#950420]">
                  <img
                    src={CartBattery}
                    alt="MaxTag USB Type-C Rechargeable Battery"
                    className="w-24 h-24 object-contain"
                  />
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-[#950420]">
                  MaxTag USB Type-C Rechargeable Battery
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-[#950420]">
                  RM 36.00
                </td>
                <td className="text-center text-sm font-semibold text-[#950420]">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 p-2 border rounded"
                    min="0"
                    max="99"
                  />
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-[#950420]">
                  RM {36.0 * quantity}
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="px-4 py-2">
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="coupon_code"
                        value={couponCode}
                        onChange={handleCouponChange}
                        placeholder="Coupon code"
                        className="p-2 border rounded w-full lg:w-64"
                      />
                      <button
                        type="submit"
                        onClick={handleApplyCoupon}
                        className="ml-2 bg-black text-white py-2 px-4 rounded w-full lg:w-auto"
                      >
                        Apply coupon
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#950420] text-white py-2 px-4 rounded w-full lg:w-auto mt-4 lg:mt-0"
                      disabled
                    >
                      Update cart
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {/* Cart Totals */}
        <div className="mx-auto w-full lg:w-1/3 mt-6 lg:mt-0 border-4  p-8">
          <h2 className="text-xl font-bold text-[#950420]">CART TOTALS</h2>
          <table className="w-full mt-4">
            <tbody>
              <tr>
                <td className="px-4 py-2 text-[#950420] text-center font-bold">
                  Subtotal
                </td>
                <td className="px-4 py-2 text-center">RM {36.0 * quantity}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-[#950420] text-center font-bold">
                  Shipping
                </td>
                <td className="px-4 py-2 text-center">RM 6.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-[#950420] text-center font-bold">
                  Tax
                </td>
                <td className="px-4 py-2 text-center">RM 0.00</td>
              </tr>
              <tr className="font-bold">
                <td className="px-4 py-2 text-[#950420] text-center">Total</td>
                <td className="px-4 py-2 text-center text-[20px] text-[#950420]">
                  RM {36.0 * quantity + 6}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-6">
            <Link to={'/checkout'} className="text-center inline-block bg-black text-white py-3 px-4 rounded w-full hover:bg-[#950420] font-bold">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCompo;
