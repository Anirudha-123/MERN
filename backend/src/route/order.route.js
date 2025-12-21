import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createOrder, deleteAllOrder, deletSingleOrder, getAllOrders, getOrder } from "../controllers/order.controller.js";
const route = Router()
route.use(verifyToken)
route.post("/", createOrder)
route.get("/latest", getOrder)
route.get("/allOrders", getAllOrders)
route.delete("/allOrders", deleteAllOrder)
route.delete("/:id", deletSingleOrder)
export default route