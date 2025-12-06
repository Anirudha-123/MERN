import { Address } from "../models/address.model.js"

const addAddress = async(req, res) =>{
try {
  const userId = req.user._id
  const { phone, city, state, address, pinCode }= req.body
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
export { addAddress }