import express from "express"
import { dbConnect } from "./src/config/db.js";
import dotenv from "dotenv"
import {route} from "./src/route/user.route.js"
import {route1} from "./src/route/product.route.js"
import cartsRouter from "./src/route/carts.route.js"
import addressRouter from "./src/route/address.route.js"
import orderRouter from "./src/route/order.route.js"
import cors from "cors"


dotenv.config()

const app = express();
// app.use(cors())
app.use(express.json())


app.use(cors({
  origin:  [
    "http://localhost:5173",
    "https://mern-8tqb.onrender.com",
    " https://mern-backend-oe29.onrender.com"
  ],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

dbConnect()

app.use("/api/user", route)
app.use("/api/product", route1)
app.use("/api/carts/demo", cartsRouter)
app.use("/api/address", addressRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) =>{
  res.send("welcom to the backend server")
})

app.listen( process.env.PORT || 3000, ()=>{
  console.log("server start")
})
