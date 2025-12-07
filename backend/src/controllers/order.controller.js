import { Order } from "../models/order.model.js"

const createOrder = async(req , res) =>{
  try {
    const userId = req.user._id

    const {  addressId, cartId } = req.body

    if(!userId || !addressId || !cartId){
      res.status(401).json({
        message:" All fields are required"
      })
    }

    const order = await Order.create({
      userId,
      addressId,
      cartId,
      
    })

    if(!order){
      res.status(404).json({
        message: ' order not found'
      })
    }

    const orders = await Order.findById(order._id).populate("userId").populate("addressId").populate("cartId")

    res.status(201).json({
      order:orders,
      message:"Order create successfully"
    })

  } catch (error) {
    console.error(error)
    
  }
}

const getOrder = async(req, res) =>{
  const userId = req.user._id

  const order = await Order.agg

}
export { createOrder }