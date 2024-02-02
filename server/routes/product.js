import express from "express";
import Product from "../models/Product.js";
import { faker } from '@faker-js/faker';
import Description from "../models/description.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
 

 router.post(`/productsDescriptions`, async (req, res) => {
  const [{ id }] = [req.body];
  const pid = [];
  const returnValues = [];
  let i = 0;
  try { 
      id.forEach(async singleId => { 
         pid.push(singleId) 
    }); 
    for(i=0; i < pid.length;i++){
     const products = await Product.findById(pid)
     returnValues.push(products.Description);
    }
    res.status(200).json(returnValues);
   } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
