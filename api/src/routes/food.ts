import { Router, Request, Response } from "express";

const food = Router();

food.get("/food", (request: Request, response: Response) => {
  response.send({
    success: true,
    payload: [
      {
        id: 0,
        title: "Creamy Vegan Mushroom Stroganoff",
        description:
          "This is the BEST vegan mushroom stroganoff you will ever try! It’s packed with umami, is super flavorful, and is so creamy you won’t believe it’s dairy-free and vegan. It’s the ultimate comfort food!",
        image: "/images/stroganoff.jpg",
      },
      {
        id: 1,
        title: "Vegan Lasagna",
        description:
          "I don’t say this lightly. This truly is the BEST Vegan Lasagna! Layered with a tofu-cashew ricotta, red lentil marinara and loads of fresh spinach, this lasagna is protein packed with 26 grams per serving and is sure to satisfy! ",
        image: "/images/lasagna.jpg",
      },
      {
        id: 2,
        title: "Vegan Pasta",
        description:
          "Tuck into a satisfying bowl of vegan pasta. Our veg-packed pasta salads, orzo, and spaghetti dishes are dairy-free, meat-free and totally delicious.",
        image: "/images/pasta.jpg",
      },
    ],
  });
});

export default food;
