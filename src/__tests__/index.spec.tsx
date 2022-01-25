import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home wordList={null} message={null} />);

    const heading = screen.getByRole("heading", {
      name: /definitions of information technology terms/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
