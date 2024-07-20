import ProductModel from "../model/clothModel.js";

//add cloth
const addProduct = async (req,res)=>{
    try{
        const products = await ProductModel.find({});
        let id;
        if(products.length>0){
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id=last_product.id+1;
        }else{
            id=1;
        }
    const product = new ProductModel({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_Price:req.body.new_Price,
        old_Price:req.body.old_Price,
        description:req.body.description,
        sizes:req.body.sizes,
        subImages:req.body.subImages
    });
    console.log(product)
    await product.save()
    console.log("Saved!");
    res.json({
        success:true,
        name:req.body.name,
    })
}catch(error){
    res.status(500).json({
        success: false,
        message: error.message,
    });
}
}

//remove Product
const removeProduct = async (req,res)=>{
    try{
       await ProductModel.findOneAndDelete({id:req.body.id});
      
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })

    }catch(error){
        console.log(error)
        res.json({success:false,message:"error while deleting"})
    }
}

//list product
const listProduct = async (req,res)=>{
    let products = await ProductModel.find({})
    console.log("All Products Fetch");
    res.send(products);
}

//newCollection
const newCollection = async (req,res)=>{
    let products = await ProductModel.find({});
    let newCollection = products.slice(1).slice(-8)
    console.log("New Collection fetch")
    res.send(newCollection)
}

export {addProduct, removeProduct, listProduct,newCollection};