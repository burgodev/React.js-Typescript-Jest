import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should have a typography", async () => {
    render(<Header />);

    expect(screen.getByTestId("typography")).toBeInTheDocument();
  });
});
