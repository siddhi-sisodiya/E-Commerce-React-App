import cat1 from "../assets/categories/category1.jpg";
import cat2 from "../assets/categories/category2.jpg";
import cat3 from "../assets/categories/category3.jpg";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {[cat1, cat2, cat3].map((img, i) => (
        <img key={i} src={img} className="h-40 w-full object-cover rounded" />
      ))}
    </div>
  );
};

export default Categories;