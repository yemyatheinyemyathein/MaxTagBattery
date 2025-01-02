import { useEffect, useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
    createAccount: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        // Use a location API to get the country information
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data && data.country_name) {
          setFormData((prev) => ({ ...prev, country: data.country_name }));
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  const handleChange = (e: { target: any; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "true" || value === "false" ? JSON.parse(value) : value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-2xl w-full rounded text-[#950420]">
      <h2 className="text-[25px] font-bold mb-6 text-[#950420]">
        Billing & Shipping
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="flex gap-2 text-[16px] mb-2">
              First Name{" "}
              <div className="cursor-help relative">
                * <span className="absolute -left-[2px]">...</span>
              </div>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="flex gap-2 text-[16px] mb-2">
              Last Name{" "}
              <div className="cursor-help relative">
                * <span className="absolute -left-[2px]">...</span>
              </div>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="flex gap-2 text-[16px] mb-2">
            Company Name (optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
          />
        </div>

        <div>
          <label htmlFor="country" className="flex gap-2 text-[16px] mb-2">
            Country / Region{" "}
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            disabled={loading} // Disable while fetching location
            required
          >
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value={formData.country}>{formData.country}</option>
          </select>
          {loading && (
            <p className="text-sm text-gray-500">Detecting location...</p>
          )}
        </div>

        <div>
          <label
            htmlFor="houseAndStreet"
            className="flex gap-2 text-[16px] mb-2"
          >
            Street address{" "}
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="text"
            id="houseAndStreet"
            name="houseAndStreet"
            placeholder="House number and street name"
            value={formData.address1}
            onChange={handleChange}
            className="mt-2 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
          <input
            type="text"
            id="addressDetails"
            name="addressDetails"
            placeholder="Apartment, suite, unit, etc. (optional)"
            value={formData.address2}
            onChange={handleChange}
            className="mt-3 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
          />
        </div>

        <div>
          <label htmlFor="city" className="flex gap-2 text-[16px] mb-2">
            Town / City{" "}
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="state" className="flex gap-2 text-[16px] mb-2">
            State / Country
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="postcode" className="flex gap-2 text-[16px] mb-2">
            Postalcode / ZIP
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="flex gap-2 text-[16px] mb-2">
            Phone
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="flex gap-2 text-[16px] mb-2">
            Email address
            <div className="cursor-help relative">
              * <span className="absolute -left-[2px]">...</span>
            </div>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
            required
          />
        </div>
        <div className="flex gap-4">
          <input
            type="checkbox"
            id="createAccount"
            name="createAccount"
            checked={formData.createAccount}
            onChange={(e) =>
              handleChange({
                target: { name: "createAccount", value: e.target.checked },
              })
            }
            className="mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 border"
          />
          <span>Create an account?</span>
        </div>

        <div>
          <h2 className="text-[25px] font-bold mt-6 text-[#950420]">
            Additional Information
          </h2>
          <label htmlFor="orderNotes" className="text-[16px] mt-4 block">
            Order Notes (optional)
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            placeholder="Notes about your order, eg. special notes for delivery."
            className="mt-1 block w-full border-2 focus:outline-none focus:border-[#950420] p-3 rounded text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
