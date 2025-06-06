import mongoose from "mongoose";

const connectDB=async(dbUrl,dbName)=>{

    try {
        await mongoose.connect(dbUrl+dbName);
        console.log("Connetc to data  successfully")
        
    } catch (error) {
        console.log(error.message)
    }

}
export default connectDB;