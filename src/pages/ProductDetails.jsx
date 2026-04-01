import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-10">Product not found </h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-gray-100 flex items-center justify-center h-100">
          <img src={product.img} className="h-full object-contain" />
        </div>

        {/* DETAILS */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600">
            Best quality product for your style.
          </p>

          <h2 className="text-2xl text-[#088395] font-bold">
            ₹{product.price}
          </h2>

          {/* ✅ ADD TO CART */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-[#088395] text-white px-6 py-2"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;