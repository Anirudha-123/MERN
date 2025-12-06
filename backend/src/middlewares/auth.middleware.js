import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const verifyToken = async(req, res, next) =>{
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "").trim();
    //  console.log("Token:", token)

    if(!token){
     return res.status(404).json({
        message:"token invailed"
      })
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    let user = await User.findById(decodedToken._id)
    if(!user){
     return res.status(404).json({
        message:" user not found"
      })
    }
    // console.log(user)
      req.user = user
     next()
    
  } catch (error) {
    console.error(error)
    
  }
}

