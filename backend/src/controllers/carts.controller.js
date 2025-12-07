import mongoose, { model } from "mongoose";
import { Cart } from "../models/cart.model.js";

const addToCart = async (req, res) => {
  try {
    const { cartProduct, quantity } = req.body;

    const qty = Number(quantity) || 1;

    console.log("cartproduct id :", cartProduct);

    const userId = req.user._id;

    console.log("userId : ", userId);

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [
          {
            cartProduct,
            quantity: qty,
          },
        ],
      });
    } else {
      let itemIndex = cart.items.findIndex(
        (item) => item.cartProduct.toString() === cartProduct
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity = Number(
          cart.items[itemIndex].quantity + qty
        );
      } else {
        cart.items.push({ cartProduct, quantity: qty });
      }
    }

    await cart.save();

    const updatedCart = await Cart.findById(cart._id).populate({
      path: "items.cartProduct",
      model: "Product",
    });

    res
      .status(201)
      .json({ message: "item added successfully", cart: updatedCart });
  } catch (error) {
    console.error(error);
  }
};

const incrementProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });

    if (cart) {
      let item = cart.items.find((item) => item.cartProduct.toString() === id);

      if (item) {
        item.quantity += 1;
      }
    }

    await cart.save();

    const update = await Cart.findById(cart._id).populate({
      path: "items.cartProduct",
      model: "Product",
    });

    res.status(201).json({ message: "Quantity updated", cart: update });
  } catch (error) {
    console.error(error);
  }
};

const decrementProductQuantity = async (req, res) => {
  try {
    const { cartProduct, quantity } = req.body;

    const { id } = req.params;
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });

    if (cart) {
      let item = cart.items.find((item) => item.cartProduct.toString() === id);

      if (!item) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      //    if (item.quantity <= 1) {

      // }

      // if (item.quantity > 1) {
      //   item.quantity -= 1;
      // }

      if (item.quantity <= 1) {
      cart.items = cart.items.filter((i) => i.cartProduct.toString() !== id);
    } 
    else {
      item.quantity -= 1;
    }
    }

    await cart.save();

    const update = await Cart.findById(cart._id).populate({
      path: "items.cartProduct",
      model: "Product",
    });

    res.status(201).json({ message: "Quantity updated", cart: update });
  } catch (error) {
    console.error(error);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    //  console.log("userId : ",userId)

    const cart = await Cart.findOne({ userId }).populate({
      path: "items.cartProduct",
      model: "Product",
    });
    // .populate({
    //   path: "userId",
    //   model: "User",
    // });

    //  const  cart  = await Cart.find()

    // console.log("Cart : ",cart)
    // console.log("User :",cart.userId.email)

    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }

    return res.status(201).json({ message: "cart fetched successfully", cart });
  } catch (error) {
    console.error(error);
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(401).json({
        message: " id is invailed",
      });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      res.status(404).json({
        message: "cart not found",
      });
    }

    cart.items = cart.items.filter((i) => i._id.toString() !== id);

    await cart.save();

    
    const updateCart = await Cart.findById(cart._id).populate({
      path: "items.cartProduct",
      model: "Product",
    });

    res.status(200).json({
      message: " cart item remove successfully",
      data: updateCart,
    });
  } catch (error) {
    console.error(error);
  }
};

export {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  getCart,
  removeCartItem,
};
