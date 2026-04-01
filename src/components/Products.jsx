import { products } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;