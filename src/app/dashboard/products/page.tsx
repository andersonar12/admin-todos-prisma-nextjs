import ProductCard from "@/app/products/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      {/* <ProductCard /> */}
    </div>
  );
}
