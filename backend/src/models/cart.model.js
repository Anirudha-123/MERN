import mongoose from "mongoose";
const cartShema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items:[{
    cartProduct:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Product"
    },
    quantity:{
      type:Number,
      default:1
    }
}]
})
const Cart = mongoose.model("Cart", cartShema)
export { Cart }