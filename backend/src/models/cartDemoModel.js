import mongoose from "mongoose";

const CartsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  items: [
    {
      cartProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },

      quantity: 1,
    },
  ],
});

const Carts = mongoose.model("Carts", CartsSchema);

export { Carts };
