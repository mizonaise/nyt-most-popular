import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../src/components/ArticleList";

test("renders article list", () => {
  const articles = [{ id: "1", title: "Test Article" }];
  render(<ArticleList articles={articles} />);
  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
});
