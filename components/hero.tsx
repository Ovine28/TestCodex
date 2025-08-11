"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-flowing-river-4289/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="looping background"
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div style={{ y }} className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-semibold">Arcadine</h1>
        <p className="mb-8 max-w-md text-lg">Where form meets meticulous engineering.</p>
        <div className="flex gap-4">
          <a href="#products" className="rounded-md bg-white px-6 py-3 text-gray-900">Explore</a>
          <a href="/store" className="rounded-md border border-white px-6 py-3">Buy</a>
        </div>
      </motion.div>
    </section>
  );
}
