import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { addAddress } from "../controllers/address.controller.js";
const route = Router()

route.use(verifyToken)
route.post("/", addAddress)

export default route