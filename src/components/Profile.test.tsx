import { render, screen } from "@testing-library/react";

import Profile from "./Profile";

describe("Profile Component", () => {
  it("should have an image", async () => {
    render(<Profile profileData={MOCKUP} />);

    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
  it("should have a name", async () => {
    render(<Profile profileData={MOCKUP} />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
  });
  it("should have a job", async () => {
    render(<Profile profileData={MOCKUP} />);
    expect(screen.getByTestId("job")).toBeInTheDocument();
  });
});

const MOCKUP = {
  name: "Filipe Burgonovo",
  jobTitle: "Javascript Front End Engineer",
  image: "/images/filipe.jpg",
};
