import { Router, Request, Response } from "express";

const home = Router();

home.get("/home", (request: Request, response: Response) => {
  response.send({
    success: true,
  });
});

export default home;
