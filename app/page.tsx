import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import FAQ from "@/components/faq";
import { products, faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="products" className="container py-24">
        <h2 className="mb-8 text-3xl font-semibold">Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <section id="design" className="container py-24">
        <h2 className="mb-8 text-3xl font-semibold">Design</h2>
        <p className="max-w-xl text-lg">
          Precision‑milled chassis, sandblasted finishes, and modular components embody our design language.
        </p>
      </section>
      <section id="ecosystem" className="container py-24">
        <h2 className="mb-8 text-3xl font-semibold">Ecosystem</h2>
        <p className="max-w-xl text-lg">
          Seamless continuity across devices through encrypted sync, shared accessories, and cross‑platform apps.
        </p>
      </section>
      <section id="faq" className="container py-24">
        <FAQ items={faqs} />
      </section>
    </>
  );
}
