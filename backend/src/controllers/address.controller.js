import { Address } from "../models/address.model.js"

const addAddress = async(req, res) =>{
try {
  const userId = req.user._id
  const { phone, city, state, address, pinCode ,userName }= req.body

  console.log(req.body)
  if( !phone || !city || !state || !address || !pinCode || !userName){
    res.status(401).json({
      message: " All fileds are required"
    })
  }

  const NewAddress = await Address.create({
    phone,
    state,
    city,
    address,
    pinCode, 
    userId,
    userName

  })

  const userAddress = await Address.findById(NewAddress._id).select("-_v")

  if(!userAddress){
    res.status(404).json({
      message:" user address not found"
    })
  }

  res.status(201).json({
    data: userAddress,
    message: " Address added successfully"
  })


} catch (error) {
  console.error(error)
  
}



}

const getAddress = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    const address = await Address.findOne({ userId }).populate("userId", "name email"); 
    // "name email" → fields you want from User model

    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json(address);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



const deleteAllAddress = async (req,res) => {
  
  try {

    const userId = req.user._id

    const deleteAll = await Address.deleteMany({userId})

     if (deleteAll.deletedCount === 0) {
      return res.status(404).json({ message: "No addresses found for this user" });
    }


    res.json({meassge:"all addresses delete succssfully"})
    
  } catch (error) {
    
    console.error(error)
  }
}


const deleteSingleAddress = async (req,res) => {
  
  try {

 
    const userId = req.uer._id

    const addId = req.params._id
    
    const deleteAdd = await Address.findByIdAndDelete({_id:addId,userId:userId})


    if (!deleteAdd) {
      res.json({message:"address not found"})
    }


    res.json({message:"address delete successfully"})



    
  } catch (error) {
    
    console.error(error)
  }
}


const getAllAddress= async (req,res) => {
  
  try {


    const userId = req.user._id

    const getAllAdd = await Address.find({userId})



    if (!getAllAdd) {
      res.json({message:"address not found"})
    }


    res.json({message:"all addresses fetched" , getAllAdd})


    
  } catch (error) {
    
    console.error(error)
  }
}


export { addAddress,getAddress,deleteAllAddress ,deleteSingleAddress,getAllAddress}