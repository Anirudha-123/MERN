import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  addressId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Address',
  },
  cartId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Cart"
  },
  status:{
    type:String,
    default:"pending",
    enum:["pending","deleverd","cancel"]
  }

})

const Order = mongoose.model("Order", orderSchema)

export {Order}