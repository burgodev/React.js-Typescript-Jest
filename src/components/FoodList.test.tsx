import { render, screen } from "@testing-library/react";
import FoodList from "./FoodList";
import { act } from "react-dom/test-utils";

describe("FoodList Component", () => {
  it("should have an image", async () => {
    act(() => {
      render(<FoodList list={MOCKUP} />);
    });

    expect(screen.getAllByTestId("image")[0]).toBeInTheDocument();
    // setTimeout(
    //   () => expect(screen.getAllByTestId("image")[0]).toBeInTheDocument(),
    //   1000
    // );
  });

  it("should have a title", async () => {
    act(() => {
      render(<FoodList list={MOCKUP} />);
    });
    expect(screen.getAllByTestId("title")[0]).toBeInTheDocument();
    // setTimeout(
    //   () => expect(screen.getAllByTestId("title")[0]).toBeInTheDocument(),
    //   1000
    // );
  });
  it("should have a description", async () => {
    act(() => {
      render(<FoodList list={MOCKUP} />);
    });
    expect(screen.getAllByTestId("description")[0]).toBeInTheDocument();
    // setTimeout(
    //   () => expect(screen.getAllByTestId("description")[0]).toBeInTheDocument(),
    //   1000
    // );
  });
});

const MOCKUP = [
  {
    id: 0,
    title: "Creamy Vegan Mushroom Stroganoff",
    description:
      "This is the BEST vegan mushroom stroganoff you will ever try! It’s packed with umami, is super flavorful, and is so creamy you won’t believe it’s dairy-free and vegan. It’s the ultimate comfort food!",
    image: "/images/stroganoff.jpg",
  },
];
