import express from 'express';
import { addProduct, listProduct, newCollection, removeProduct } from '../controller/clothController.js';

const productRoute = express.Router();


// add product
productRoute.post("/addproduct",addProduct )
productRoute.post("/removeproduct", removeProduct)
productRoute.get("/listproduct", listProduct)
productRoute.get("/newcollection", newCollection)

export default productRoute;