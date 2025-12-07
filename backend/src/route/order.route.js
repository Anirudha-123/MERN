import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createOrder } from "../controllers/order.controller.js";
const route = Router()
route.use(verifyToken)
route.post("/", createOrder)
export default route