import express from "express";
import Product from "../models/Product.js";
import Description from "../models/Description.js";
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
  try { 
      id.forEach(async singleId => { 
         pid.push(singleId) 
    }); 
    for(let i=0; i < pid.length;i++){
     const description = await Description.findById(pid)
     returnValues.push(description);
    };
    res.status(200).json(returnValues);
   } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
