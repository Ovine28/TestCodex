import CompareTable from "@/components/compare-table";
import { products } from "@/lib/data";

export default function Compare() {
  return (
    <div className="container py-24">
      <h1 className="mb-8 text-3xl font-semibold">Compare Products</h1>
      <CompareTable products={products.slice(0, 3)} />
    </div>
  );
}
