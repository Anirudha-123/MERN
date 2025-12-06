import mongoose from "mongoose"
import { User } from "../models/user.model.js"
import  jwt  from "jsonwebtoken"
const addUser = async(req, res)=>{
  try {
    const { fullName, email, password}= req.body

    if(!fullName || !email || !password){
      res.status(401).json({
        message: " all fileds are require"
      })
    }

    const existUser = await User.findOne({email:email})

    if(existUser){
      res.status(404).json({
        message:" user already exist"
      })
}

const newUser = await User.create({
  fullName,
  email,
  password
})

const user = await User.findById(newUser._id).select("-password ")
if(!user){
  res.status(404).json({
    message:"user not found"
  })
}

res.status(201).json({
  data: user,
  message:"  User Added sucessfully"
})

    
  }catch (error) {
    console.error(error)
    
  }
}

const userlogin = async(req, res)=>{
  const { email, password } = req.body
  console.log(req.body)

  if(!email || !password){
    res.status(401).json({
      message: "all fileds are required"
    })
  }

  const user = await User.findOne({email: email});
  if(!user){
    res.status(404).json({
      message : " this email id is not ragister"
    })
  }

  const isPassword = await user.password === password;
  if(!isPassword){
    res.status(404).json({
      message: "password is not vailed"
    })
  }

  const token =  jwt.sign({ _id: user._id,fullName:user.fullName, email:user.email},process.env.ACCESS_TOKEN_SECRET,{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY})

  const loginUser = await User.findById(user._id).select("-passwpord")

  res.status(201).json(
    {
      token: token,
      user:loginUser,
      message : " User login sucessfull"
    }
  )

}

const singleUser = async(req, res)=>{
  const user = req.user
  console.log(req.user)
  res.status(200).json({
    sengleUser: user,
    message: " Get single user sucessfull"
  })
}



const updateUser = async (req,res) => {
   
  try {

  // const user =  req.body
 

   const update = await User.findByIdAndUpdate(req.user._id,{$set:req.body},{new:true})

  if (!update) {
    res.status(404).json({
    
    message: " user not update "
  })

  }

  res.status(200).json({
   
    message: "  user update  sucessfull"
  })
                
    
  } catch (error) {
    
    console.error(error)
  }
    
}


const deleteuser = async (req,res) => {
  
  try {

     await User.findByIdAndDelete(req.user._id)

      res.status(200).json({
   
    message: "  user delete  successfully"
  })
    
  } catch (error) {
    
    console.error(error)
  }
}


const getAllUsers = async (req,res) => {
  try {


   const data =  await User.find()

    res.status(201).json({message:"all users fetched",users:data})
    
  } catch (error) {
    
    console.error(error)
  }
}


const fetchProfile = async(req, res) =>{
  try {
    const id = req.user._id
    const email = req.user.email
    if(!mongoose.Types.ObjectId.isValid(id)){
      res.status(404).json({
        message:"  userName not found"
      })
    }
  
    const userProfile = await User.aggregate([
  // { $match: { _id: new mongoose.Types.ObjectId(id) } },
  { $match: { email :  email } },
  {
    $lookup: {
      from: "addresses",
      localField: "_id",
      foreignField: "userId",
      as: "userProfile"
    }
  }
]);

  
    res.status(201).json({
     userProfile,
      message:"user profile fetch successfully"
    })
  
  } catch (error) {
    console.error(error)
    
  }

}

export { addUser, userlogin, singleUser, updateUser,deleteuser,getAllUsers, fetchProfile}