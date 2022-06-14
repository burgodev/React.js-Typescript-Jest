import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should have a typography", async () => {
    render(<Footer />);

    expect(screen.getByTestId("typography")).toBeInTheDocument();
  });
});
