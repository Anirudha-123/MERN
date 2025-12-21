import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  address:{
    type:String,
    required: true
  },
  pinCode:{
    type:Number,
    required:true

  },
  city:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required:true
  }
})
const Address = mongoose.model("Address", addressSchema)
export { Address }