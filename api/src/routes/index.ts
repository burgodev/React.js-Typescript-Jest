import { Router } from "express";
import home from "./home";
import profile from "./profile";
import food from "./food";

const routes = Router();

routes.use("/", home);
routes.use("/", profile);
routes.use("/", food);

export default routes;
