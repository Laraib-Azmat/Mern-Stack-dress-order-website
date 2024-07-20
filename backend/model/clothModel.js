import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    new_Price:{
        type: Number,
        required:true,
    },
    old_Price:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default:true,
    },
    description:{
        type:String
    },
    sizes: {
        type: [String], 
        required:true
      },
      subImages: {
        type: [String], 
      },
})

const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;