import {Router} from "express"
import { addUser, deleteuser, fetchProfile, getAllUsers, singleUser, updateUser, userlogin } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/", addUser)
route.post("/login", userlogin)
route.get("/singleuser", verifyToken, singleUser)
route.get("/allUsers", getAllUsers)
route.put("/update", verifyToken, updateUser)
route.delete("/delete", verifyToken, deleteuser)
route.get("/userprofile",verifyToken, fetchProfile)


export {route}

