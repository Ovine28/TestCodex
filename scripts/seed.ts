import { products, faqs } from "../lib/data";

async function seed() {
  // Example: insert products into DB
  console.log("Seeding products:", products.length);
  console.log("Seeding FAQs:", faqs.length);
}
seed();
