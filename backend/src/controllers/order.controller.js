import { populate } from "dotenv"
import { Order } from "../models/order.model.js"
import mongoose from "mongoose"
import { Address } from "../models/address.model.js"
import { Cart } from "../models/cart.model.js"

// const createOrder = async(req , res) =>{
//   try {
//     const userId = req.user._id

//     const {  addressId, cartId, totalAmount, paymentMethod } = req.body

//     console.log("REQ BODY:", req.body);


//     if(!userId || !addressId || !cartId || !totalAmount ||!paymentMethod){
//      return res.status(401).json({
//         message:" All fields are required"
//       })
//     }

//     const address = await Address.findById(addressId);
//     if(!address){
//       res.status(404).json({
//         message:"Address not found"
//       })
//     }

//     const addresses = {
//       address: address.address,
//       pinCode:address.pinCode,
//       city: address.city,
//       phone: address.phone,
//       state: address.state,
//       userName: address.userName
//     }

//     const orderCart = await Cart.findById(cartId)
//     const cartItems = orderCart.items.map((item)=>{
//       const product = item.cartProduct
//       return{
//         cartProduct:product._id,
//         name:product.name,
//         price:product.price,
//         img1:product.img1,
//         desc:product.desc,
//         quantity:item.quantity,
//         category:product.category,
//         subCategory: product.subCategory


//       }
//     })

    

//     const order = await Order.create({
//       userId,
//       addressId: addresses,
//       cartId: cartItems,
//       totalAmount,
//       paymentMethod
      
//     })

//     if(!order){
//       res.status(404).json({
//         message: ' order not found'
//       })
//     }

//     const orders = await Order.findById(order._id).populate("userId").populate("addressId").populate({
//     path: "cartId",
//     populate: {
//       path: "items.cartProduct",
//       model: "Product"
//     }
//   });

//     res.status(201).json({
//       order:orders,
//       message:"Order create successfully"
//     })

//   } catch (error) {
//     console.error(error)
    
//   }
// }

// const getOrder = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     const orders = await Order.aggregate([
//       {
//         $match: {
//           userId: new mongoose.Types.ObjectId(userId)
//         }
//       },
//       {
//         $lookup: {
//           from: "users",
//           localField: "userId",
//           foreignField: "_id",
//           as: "user"
//         }
//       },
//       { $unwind: "$user" },

//       {
//         $lookup: {
//           from: "addresses",
//           localField: "addressId",
//           foreignField: "_id",
//           as: "address"
//         }
//       },
//       { $unwind: "$address" },

//       {
//         $lookup: {
//           from: "carts",
//           localField: "cartId",
//           foreignField: "_id",
//           as: "cart"
//         }
//       },
//       { $unwind: "$cart" }
//     ]);

//     if (!orders.length) {
//       return res.status(404).json({ message: "No orders found" });
//     }

//     res.status(200).json({
//       message: "Orders fetched successfully",
//       orders,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { addressId, cartId, totalAmount, paymentMethod } = req.body;

    console.log("REQ BODY:", req.body);

    if (!userId || !addressId || !cartId || !totalAmount || !paymentMethod) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const address = await Address.findById(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    const addresses = {
      address: address.address,
      pinCode: address.pinCode,
      city: address.city,
      phone: address.phone,
      state: address.state,
      userName: address.userName
    };

    const orderCart = await Cart.findById(cartId).populate("items.cartProduct");
    if (!orderCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItems = orderCart.items.map((item) => {
      const product = item.cartProduct;
      return {
        cartProduct: product._id,
        name: product.name,
        price: product.price,
        desc: product.desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        quantity: item.quantity,
        category: product.category,
        subCategory: product.subCategory
      };
    });

    const order = await Order.create({
      userId,
      cartId,
      addressId: addresses,
      cartItems, // updated key
      totalAmount,
      paymentMethod
    });

    if (!order) {
      return res.status(500).json({ message: "Order creation failed" });
    }

   await Cart.findByIdAndUpdate(cartId, { items:[]})
    res.status(201).json({
      order,
      message: "Order created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



const getOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.findOne({ userId }).sort({ createdAt: -1 })

      
     

    

    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllOrders = async (req,res) => {
  
  try {

     const userId = req.user._id


     const allOrder = await Order.find({userId}).populate("userId").populate("addressId").populate({path:"cartId", 

        populate:{
           path:"items.cartProduct",
           model:"Product"
        }
     }).sort({ createdAt: -1 });

     if (!allOrder) {
      
         res.status(404).json({message:"orders not found"})
     }


     res.status(200).json({message:"all order fetched successfully" , orders:allOrder})
    
  } catch (error) {
    
    console.error(error)
  }
}


const deleteAllOrder = async (req,res) => {
  
  try {


    const userId = req.user._id

     const deleteAllOrders = await Order.deleteMany({userId})

     if(!deleteAllOrder){
          res.status(404).json({message:"orders not foun"})
     }


     res.status(200).json({message:"all orders delete successfully"})
  } catch (error) {

    
    console.error(error)
  }
}


const deletSingleOrder = async (req,res) => {
  
  try {


    const userId = req.user._id

    const orderId = req.params.id

    const deletedOrder =  await Order.findOneAndDelete({_id:orderId,userId:userId})


    if (!deletedOrder) {
      
      res.json({message:"order not found to delete"})
    }


    return res.json({ message: "Order deleted successfully" });




    

  } catch (error) {
    
    console.error(error)
  }
}




export { createOrder ,getOrder,getAllOrders ,deleteAllOrder,deletSingleOrder}