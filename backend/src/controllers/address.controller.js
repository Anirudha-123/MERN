import { Address } from "../models/address.model.js"

const addAddress = async(req, res) =>{
try {
  const userId = req.user._id
  const { phone, city, state, address, pinCode }= req.body

  console.log(req.body)
  if( !phone || !city || !state || !address || !pinCode){
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
    userId

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

export { addAddress,getAddress }