import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default:null},

  desc: { type: String, required: true },
  img1: { type: String, required: true },
    images: {
    type: [String],
    default: undefined
  },
  img2: { type: String ,required: true},
  img3: { type: String ,required: true},
  category: { type: String, required: true, enum: ["men", "kids", "women"] },
  subCategory: { type: String, required: true, enum: ["shirt", "t-shirt"] },
  useBg: {
  type: Boolean,
  default: false
}

  
});

export const Product = mongoose.model("Product", productSchema);
