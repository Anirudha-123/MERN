import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String ,required: true},
  img3: { type: String ,required: true},
  category: { type: String, required: true, enum: ["men", "kids", "women"] },
  subCategory: { type: String, required: true, enum: ["shirt", "t-shirt"] }
});

export const Product = mongoose.model("Product", productSchema);
