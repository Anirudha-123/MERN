
import express from "express"
import dotenv from "dotenv"
import DbConnection from "./config/db.js"

dotenv.config({path:"./config/.env"})

const app = express()

app.use(express.json())

DbConnection()



//  app.use("/api/product")

app.listen(8080  ,() => {

   console.log(`Server is running on 8080`);
   
})


