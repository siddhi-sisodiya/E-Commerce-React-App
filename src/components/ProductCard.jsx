import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded overflow-hidden group">

      {/* IMAGE */}
      <div className="relative bg-gray-100 h-64 flex items-center justify-center">

        <img
          src={item.img}
          className="h-full object-contain"
        />

        {/* 🔥 HOVER BUTTONS */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">

          {/* ✅ ADD TO CART */}
          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-white px-3 py-1 text-sm rounded"
          >
            Add to Cart
          </button>

          {/* ✅ VIEW DETAILS */}
          <Link
            to={`/product/${item.id}`}
            className="bg-white px-3 py-1 text-sm rounded"
          >
            View
          </Link>

        </div>
      </div>

      {/* TEXT */}
      <div className="p-3 flex justify-between text-sm">
        <span>{item.title}</span>
        <span className="text-[#088395] font-medium">
          ₹{item.price}
        </span>
      </div>

    </div>
  );
};

export default ProductCard;