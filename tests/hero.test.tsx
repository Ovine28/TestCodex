import { render, screen } from "@testing-library/react";
import Hero from "@/components/hero";

test("renders hero heading", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { name: /Arcadine/i })).toBeInTheDocument();
});
