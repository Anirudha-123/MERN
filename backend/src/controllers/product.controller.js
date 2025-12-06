 import { Product } from "../models/product.model.js"
import { User } from "../models/user.model.js"

const addProduct = async (req,res) => {
  try {  
    const {name,desc,price,img1,img2,img3, category, subCategory } = req.body


      if (!name || !desc || !price || !img1 || !img2 || !img3 || !category || !subCategory) {
         
        return  res.status(401).json({message:"All fields are required"})
      }

      const newProduct = await Product.create({
         name,desc,price,img1,img2,img3, category, subCategory
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


const updateProduct = async (req,res) => {
  
   try {


       const products = req.body


       const update =     await Product.findByIdAndUpdate(req.params.id,{$set:products},
        {new:true})

        if (!update) {
          
                  res.status(404).json({message:" product not update"})

        }


                res.status(201).json({message:"product update successfully"})

    
   } catch (error) {
    
     console.error(error)
   }
  
  
  }





export {addProduct,getAllProducts,deleteAllProducts,addMultipleProducts ,updateProduct,deleteSingleProduct}
