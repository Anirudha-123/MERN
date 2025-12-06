import mongoose from "mongoose";
import { DB_Name } from "./dbName.js";
export const dbConnect =async ()=>{
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    console.log("data base connection sucessfull")
  } catch (error) {
    console.error(error)
    process.exit(1)
    
  }
}