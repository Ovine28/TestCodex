import ProductCard from "@/components/product-card";
import { products } from "@/lib/data";

export default function Store() {
  return (
    <div className="container py-24">
      <h1 className="mb-8 text-3xl font-semibold">Store</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
