import FAQ from "@/components/faq";
import Search from "@/components/search";
import { faqs } from "@/lib/data";

export default function Support() {
  return (
    <div className="container py-24 space-y-12">
      <Search />
      <FAQ items={faqs} />
      <p classn="text-sm text-gray-500">Need more help? <a href="mailto:support@example.com" className="underline">Email us</a>.</p>
    </div>
  );
}
