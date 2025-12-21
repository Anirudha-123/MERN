import mongoose from "mongoose";

const shippingAddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  pinCode: { type: Number, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
  state: { type: String, required: true },
  userName: { type: String, required: true }
});

const orderItemSchema = new mongoose.Schema({
  cartProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String },
  subCategory: { type: String }
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    cartId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Cart",
      required:true
    },
    addressId: {
      type: shippingAddressSchema,
      required: true
    },
    cartItems: {
      type: [orderItemSchema], // array of items
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "delivered", "cancel"],
      default: "pending"
    },
    totalAmount: {
      type: Number,
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ["googlePay", "paytm", "COD"],
      required: true
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export { Order };
