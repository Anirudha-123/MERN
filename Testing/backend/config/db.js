import mongoose from "mongoose"

const DB_NAME= "E-Website"

const DbConnection  = async (params) => {
  
  try {

    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    console.log(`Database connection successfully ||  host ${db.connection.host}`);
    
    
  } catch (error) {
    
    console.error(error)
    process.exit(1)
  }
}

export default DbConnection