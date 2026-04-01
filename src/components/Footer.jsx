import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#088395] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold mb-3">SHOP</h1>
          <p className="text-sm">
            Best e-commerce website for buying quality products. 
            Fast delivery and best prices guaranteed.
          </p>
        </div>

        {/* Center */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <p className="text-sm">Email: sisodiyasiddhi@gmail.com</p>
          <p className="text-sm">Phone: +91 8225965936</p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm border-t border-white/30 py-3">
        © 2026 SHOP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;