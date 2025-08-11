import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data";

test("renders product name", () => {
  render(<ProductCard product={products[0]} />);
  expect(screen.getByText(products[0].name)).toBeVisible();
});
