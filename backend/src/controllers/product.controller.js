 import { Product } from "../models/product.model.js"
import { User } from "../models/user.model.js"

const addProduct = async (req,res) => {
  try {  
    const {name,desc,price, category, subCategory ,originalPrice,useBg} = req.body


      // if (!name || !desc || !price || !img1 || !img2 || !img3 || !category || !subCategory) {
         
      //   return  res.status(401).json({message:"All fields are required"})
      // }

       if (
      !name ||
      !desc ||
      !price ||
      !category ||
      !subCategory ||
      !req.files?.img1 ||
      !req.files?.img2 ||
      !req.files?.img3
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const img1 = req.files.img1[0].path;
    const img2 = req.files.img2[0].path;
    const img3 = req.files.img3[0].path;


      const newProduct = await Product.create({
         name,desc,price,img1,img2,img3, category, subCategory,originalPrice,useBg
      })


      const productNew = await Product.findById(newProduct._id)

      if(!productNew){
   res.status(403).json({message:"Product not  found"})
      }


      res.status(201).json({message:"product added successfully", product:productNew})
    
  } catch (error) {
    
    console.error(error)
  }
}

const addMultipleProducts = async (req,res) => {
  try { 
    const products = req.body

    if (!Array.isArray(products) || products.length === 0) {
      
       
      res.status(201).json({message:"All fields  are required",Products:allProducts})
    }


     const newProducts =  await Product.insertMany(products)

     if(!newProducts){

           res.status(404).json({message:"Products not added"})

     }

  res.status(404).json({message:"Products Added successfully"})
        

    
  } catch (error) {
    
    console.error(error)
  }
}




const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(201).json({message:"All products fetched successfullly",products}); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};





const deleteSingleProduct = async (req,res) => {
  
  try {

     await Product.findByIdAndDelete(req.params.id)


      res.status(201).json({message:"product deleted successfully"})
    
    
  } catch (error) {
    
    console.error(error)
  }
}

const deleteAllProducts = async (req,res) => {
   try {


        await Product.deleteMany()


        res.status(201).json({message:"All products delete successfully"})
    
   } catch (error) {
    
    console.error(error)
   }
}


// const updateProduct = async (req,res) => {
  
//    try {


//        const products = req.body


//        const update =     await Product.findByIdAndUpdate(req.params.id,{$set:products},
//         {new:true})

//         if (!update) {
          
//                   res.status(404).json({message:" product not update"})

//         }


//                 res.status(201).json({message:"product update successfully"})

    
//    } catch (error) {
    
//      console.error(error)
//    }
  
  
//   }


// const updateProduct = async (req, res) => {
//   try {
//     const updateData = { ...req.body }; // all text fields

//     // If a file is uploaded, update the img1 field
//     if (req.file) {
//       updateData.img1 = req.file.filename; // or the path: `uploads/${req.file.filename}`
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { $set: updateData },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not updated" });
//     }

//     res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error });
//   }
// };


const updateProduct = async (req, res) => {
  try {
    const updateData = { ...req.body }; // text fields

    // If a new image file is uploaded
    if (req.file) {
      // req.file.path contains the Cloudinary URL
      updateData.img1 = req.file.path; // or req.file.secure_url
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not updated" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};







export {addProduct,getAllProducts,deleteAllProducts,addMultipleProducts ,updateProduct,deleteSingleProduct}
