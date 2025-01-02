import React, { useState } from "react";
import ipay88 from "../../assets/ipay88.png";
import { Link } from "react-router-dom";

const CheckoutReviewOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("ipay88");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="max-w-2xl h-auto bg-red-200 border-4 p-8 bg-white text-[#950420]">
      <h3 className="text-[25px] text-[#950420] font-bold mb-4">Your order</h3>
      {/* Order Table */}
      <div className="checkout-review-order-table-wrapper">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2 font-medium">Product</th>
              <th className="p-2 font-medium">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">
                MaxTag / USB Type-C Rechargeable Battery{" "}
                <strong className="ml-1">× 3</strong>
              </td>
              <td className="p-2">RM 108.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t">
              <th className="p-2">Subtotal</th>
              <td className="p-2">RM 108.00</td>
            </tr>
            <tr className="border-t">
              <th className="p-2">Shipping</th>
              <td className="p-2">RM 6.00</td>
            </tr>
            <tr className="border-t">
              <th className="p-2">Tax</th>
              <td className="p-2">RM 0.00</td>
            </tr>
            <tr className="font-bold border-t">
              <th className="p-2">Total</th>
              <td className="p-2">RM 114.00</td>
            </tr>
            <tr className="font-bold">
              <th className="p-2 flex">
                <input
                  id="payment_method_ipay88"
                  type="radio"
                  name="payment_method"
                  value="ipay88"
                  checked={paymentMethod === "ipay88"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2 accent-[#950420] hover:accent-red-700"
                />

                <label
                  htmlFor="payment_method_ipay88"
                  className="flex items-center cursor-pointer"
                >
                  iPay88
                </label>
              </th>
              <td className="p-2">
                <img src={ipay88} alt="iPay88" className="ml-2 h-6" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Payment Section */}
      <div id="payment" className="mt-6">
        <div className="text-sm text-[#7A7A7A] text-center mb-6">
          Make a payment using your Credit/Debit card, FPX banking, or e-Wallet.
        </div>

        {/* Terms and Conditions */}
        <div className="text-sm border-t pt-4 text-[#7A7A7A] text-center mb-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <Link to={"/"} className="text-[#950420]">
            privacy policy
          </Link>
          .
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-full bg-[#BB0024] font-bold text-white py-3 hover:bg-black transition"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default CheckoutReviewOrder;
