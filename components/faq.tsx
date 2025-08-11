"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="multiple" className="w-full max-w-2xl">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="w-full text-left">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-4 text-sm text-gray-600 dark:text-gray-400">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
