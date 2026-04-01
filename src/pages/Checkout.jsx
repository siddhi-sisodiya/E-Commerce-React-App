import { FaCreditCard, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";
const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT - ADDRESS */}
        <div className="space-y-4">
          <h2 className="font-semibold">Shipping Details</h2>

          <input placeholder="Full Name" className="w-full border p-2" />
          <input placeholder="Address" className="w-full border p-2" />
          <input placeholder="City" className="w-full border p-2" />
          <input placeholder="Phone" className="w-full border p-2" />
        </div>

        {/* RIGHT - PAYMENT */}
        <div className="space-y-4">
          <h2 className="font-semibold">Payment Method</h2>

          <div className="border p-3"><FaCreditCard className="text-xl text-[#088395]" /> Credit / Debit Card</div>
          <div className="border p-3"> <FaMobileAlt className="text-xl text-[#088395]" />
            UPI</div>
          <div className="border p-3"> <FaMoneyBillWave className="text-xl text-[#088395]" /> Cash on Delivery</div>

          <button className="w-full bg-[#088395] text-white py-2 mt-4">
            Place Order
          </button>
        </div>

      </div>

    </div>
  );
};

export default Checkout;