import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { addAddress, deleteAllAddress, getAllAddress } from "../controllers/address.controller.js";
const route = Router()

route.use(verifyToken)
route.get("/", getAllAddress)
route.post("/", addAddress)
route.delete("/", deleteAllAddress)
route.delete("/single/:id", deleteAllAddress)

export default route