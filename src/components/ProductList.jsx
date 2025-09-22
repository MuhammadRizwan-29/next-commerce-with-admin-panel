import { products } from "@/data/data";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Link from "next/link";
import Filter from "./Filter";

export default function ProductList({ category, params }) {
  return (
    <section>
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product, index) => {
          return <ProductCard product={product} index={index} key={index} />;
        })}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View All Products
      </Link>
    </section>
  );
}
