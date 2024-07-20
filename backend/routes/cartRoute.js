import express from "express";
import authMiddleWare from "../middleWare/auth.js";
import { addToCart, removeFromCart, listCart } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, addToCart);
cartRouter.post("/remove", authMiddleWare, removeFromCart)
cartRouter.post("/list",authMiddleWare, listCart);

export default cartRouter;