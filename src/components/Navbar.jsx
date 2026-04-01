import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.totalQuantity);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT LOGO */}
        <Link to="/" className="text-xl font-bold text-[#088395]">
          SHOP
        </Link>

        {/* CENTER SEARCH */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-md pl-3 pr-10 h-10 focus:outline-none"
          />
          <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link to="/" className="hover:text-[#088395]">Home</Link>
          <Link to="/products" className="hover:text-[#088395]">Products</Link>
          <Link to="/register" className="hover:text-[#088395]">Register</Link>
          <Link to="/login" className="hover:text-[#088395]">Login</Link>

          {/* CART */}
          <Link to="/cart" className="relative">
            <MdShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
              {cart}
            </span>
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t">

          <input
            type="text"
            placeholder="Search..."
            className="w-full border p-2 rounded"
          />

          <Link to="/" className="block">Home</Link>
          <Link to="/products" className="block">Products</Link>
          <Link to="/register" className="block">Register</Link>
          <Link to="/login" className="block">Login</Link>

          <Link to="/cart" className="block">
            Cart ({cart})
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;