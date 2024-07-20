import mongoose from "mongoose"

export const connectDB = async ()=>{
    mongoose.connect("mongodb+srv://azmatlaraib2003:azmatlaraib2003@cluster0.0ju6ngm.mongodb.net/e-commerce")
    .then(()=>console.log("Database connected"))
}