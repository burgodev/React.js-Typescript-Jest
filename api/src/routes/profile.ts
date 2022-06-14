import { Router, Request, Response } from "express";

const profile = Router();

profile.get("/profile", (request: Request, response: Response) => {
  response.send({
    success: true,
    payload: {
      name: "Filipe Burgonovo",
      jobTitle: "Javascript Front End Engineer",
      image: "/images/filipe.jpg",
    },
  });
});

export default profile;
