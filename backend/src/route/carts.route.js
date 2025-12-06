import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { addToCart, decrementProductQuantity, getCart, incrementProductQuantity, removeCartItem } from "../controllers/carts.controller.js";
const route = Router()

route.use(verifyToken)
route.post("/", addToCart)
route.post("/decrement/:id", decrementProductQuantity)
route.get("/", getCart)
route.post("/:id", incrementProductQuantity)
route.delete("/:id", removeCartItem)

export default route