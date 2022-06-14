import { render } from "@testing-library/react";
import App from "./App";

it("should render main component", () => {
  const { getByTestId } = render(<App />);
  const main = getByTestId("main");
  expect(main).toBeInTheDocument();
});

it("should render header component", () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId("header");
  expect(header).toBeInTheDocument();
});

it("should render footer component", () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId("footer");
  expect(header).toBeInTheDocument();
});
