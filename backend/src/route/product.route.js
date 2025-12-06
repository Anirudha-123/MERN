import {Router} from "express"
import { addMultipleProducts, addProduct, deleteAllProducts, deleteSingleProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const route1 = Router();

// route1.post("/",verifyToken, addProduct)


route1.post("/addProduct",verifyToken,addProduct)
route1.post("/addMultiProducts",verifyToken,addMultipleProducts)
route1.get("/getProducts",getAllProducts)
route1.delete("/deleteAll",deleteAllProducts)
route1.delete("/deleteSingle/:id",deleteSingleProduct)
route1.put("/update/:id",verifyToken,updateProduct)



export {route1}

