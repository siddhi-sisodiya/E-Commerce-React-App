import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdSentimentDissatisfied } from "react-icons/md";

const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADING */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <MdShoppingCart className="text-[#088395] text-4xl" />
        Your Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {products.length === 0 ? (
            <div className="flex flex-col  justify-center py-10 text-gray-500">
             <MdSentimentDissatisfied className="text-xl text-gray-500" />
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >

                {/* IMAGE + DETAILS */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    className="w-24 h-24 object-contain"
                  />

                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="bg-gray-200 px-2 py-1"
                  >
                    <FiMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="bg-gray-200 px-2 py-1"
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* TOTAL */}
                <div className="font-semibold">
                  ₹{item.price * item.quantity}
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-xl"
                >
                  <MdDelete />
                </button>

              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="border p-6 rounded shadow-sm h-fit">

          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          {/* CHECKOUT BUTTON */}
          <Link to="/checkout">
            <button className="w-full bg-[#088395] text-white py-2 mt-5 hover:bg-[#066a74]">
              Proceed to Checkout
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Cart;