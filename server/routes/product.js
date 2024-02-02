import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// // faker variables to generate data
// const productDescription = faker.commerce.productDescription();
// const productName = faker.commerce.productName()
// const productCategory = faker.commerce.department()
// const image = faker.image.url()

// // Function to generate random descriptions
// const generateRandomDescriptions = () => {
//   const descriptions = [];
//   for (let i = 0; i < 10; i++) { // Adjust the number based on how many descriptions you want to generate
//     descriptions.push({
//       productName: `${productName}`,
//       productDescription: `${productDescription}`,
//       category: `${productCategory}`,
//       image: `${image}`
//     });
//   }
//   return descriptions;
// };

// router.post("/populate-descriptions", async (req, res) => {
//   try {
//     // TODO Add authentication and authorization checks here, e.g., check if the user is an admin
      
//     // Ensure that referenced Product documents exist
//     const products = await Product.find();
//     if (products.length === 0) {
//       throw new Error("No products found. Populate products before running this script.");
//     }
//     // Generate and insert random descriptions
//     const randomDescriptions = generateRandomDescriptions();
//     await Description.insertMany(randomDescriptions); 
//     // Update Product documents with random descriptions
//     for (let i = 0; i < products.length; i++) {
//       const product = products[i];
//       const randomDesc = randomDescriptions[i];
//       const pushDescriptions2Products = product.Description.push(randomDesc) 
//       pushDescriptions2Products;
//       // Save the updated product document
//       await product.save();
//     }
//     res.status(200).json({ message: "Descriptions populated successfully" });
//   } catch (error) {
//     console.error("Error populating descriptions:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

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
