"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: any }) {
  return (
    <motion.div
      whileHover={{ rotateX: 2, rotateY: -2 }}
      className="group relative rounded-lg border bg-white p-6 dark:bg-gray-900"
    >
      <Link href={`/products/${product.slug}`}>
        <span className="sr-only">{product.name}</span>
      </Link>
      <div className="relative mb-4 aspect-square">
        <Image src={product.images[0]} alt={product.name} fill className="rounded-md object-cover" />
      </div>
      <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
      {product.isNew && <span className="rounded bg-accent px-2 py-1 text-xs text-white">New</span>}
    </motion.div>
  );
}
