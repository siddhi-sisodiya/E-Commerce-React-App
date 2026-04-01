// import { products } from "../data/products";
// import ProductCard from "../components/ProductCard";

// const ProductList = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">

//       <h1 className="text-2xl font-bold mb-6">Products</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((item) => (
//           <ProductCard key={item.id} item={item} />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default ProductList;
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [sort, setSort] = useState("");

  // SORT LOGIC
  const sortedProducts = [...products].sort((a, b) => {
    const priceA = Number(a.price);
    const priceB = Number(b.price);

    if (sort === "low") return priceA - priceB;
    if (sort === "high") return priceB - priceA;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* ✅ DROPDOWN ADD KIYA */}
      <div className="mb-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default ProductList;