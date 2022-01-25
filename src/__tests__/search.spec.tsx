import { render, RenderResult, screen } from "@testing-library/react";
import { Search } from "../components";

describe("Search", () => {
  let renderResult: RenderResult | null = null;

  beforeEach(() => {
    renderResult = render(<Search />);
  });

  afterEach(() => {
    renderResult?.unmount;
  });

  it("renders a searchbox with button", () => {
    const searchbox = screen.getByRole("searchbox");
    const button = screen.getByRole("button");

    expect(searchbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should be accessible", () => {
    const label = screen.getByLabelText("Search");

    expect(label).toBeInTheDocument();
  });
});
