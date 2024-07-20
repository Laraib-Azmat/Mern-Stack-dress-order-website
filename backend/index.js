import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import productRoute from "./routes/clothRoute.js";
import multer from "multer";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";

// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//database connection
connectDB();


//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${file.originalname}`)
    }
})

 const upload = multer({storage:storage})

 //Endpoint for uploading image
 app.use("/images", express.static('upload/images'))
 app.post("/upload",upload.fields([{name:'mainImage', maxCount:1},{name:'subImages', maxCount:4}]),(req,res)=>{


    try {
        const mainImageFiles = req.files['mainImage'];
        const subImageFiles = req.files['subImages'];

      
    
        if (!mainImageFiles || mainImageFiles.length === 0) {
          return res.status(400).json({ success: false, message: 'Main image is required' });
        }
        
        if (!subImageFiles || subImageFiles.length > 4) {
          return res.status(400).json({ success: false, message: 'You must upload up to 4 sub-images' });
        }

       

    const mainImgUrl = `http://localhost:${port}/images/${mainImageFiles[0].filename}`;
     const subImgUrls = subImageFiles.map(file=>`http://localhost:${port}/images/${file.filename}`)
     console.log("here")
     console.log(subImgUrls)
    res.json({
        success:1,
        mainImgUrl, subImgUrls
    })
}catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Image upload failed' });
  }
 });


//api endpoints
app.use("/product",productRoute)
app.use("/user", userRouter);
app.use("/cart", cartRouter);

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})