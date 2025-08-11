import { notFound } from "next/navigation";
import Image from "next/image";
import FAQ from "@/components/faq";
import { products, faqs } from "@/lib/data";
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="container py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {product.images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-md">
              <Image src={src} alt={`${product.name} image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
        <div>
          <h1 className="mb-4 text-4xl font-semibold">{product.name}</h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">{product.tagline}</p>
          <ul className="mb-8 space-y-2">
            {product.specs.map(s => (
              <li key={s.label} className="flex justify-between border-b py-2 text-sm">
                <span>{s.label}</span> <span>{s.value}</span>
              </li>
            ))}
          </ul>
          <button className="rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900">
            Buy – {product.price}
          </button>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="mb-6 text-2xl font-semibold">FAQ</h2>
        <FAQ items={faqs} />
      </section>
    </div>
  );
}
