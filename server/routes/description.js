import express from "express"; 
import Description from "../models/Description.js";
import { faker } from "@faker-js/faker";
const router = express.Router();


// faker variables to generate data
const productDescription = faker.commerce.productDescription();
const productName = faker.commerce.productName()
const productCategory = faker.commerce.department()
const image = faker.image.url()

// Function to generate random descriptions
const generateRandomDescriptions = () => {
  const descriptions = [];
  for (let i = 0; i < 10; i++) { // Adjust the number based on how many descriptions you want to generate
    descriptions.push({
      productName: `${productName}`,
      productDescription: `${productDescription}`,
      category: `${productCategory}`,
      image: `${image}`
    });
  }
  return descriptions;
};

router.post("/populate-descriptions", async (req, res) => {
  try {
    // TODO Add authentication and authorization checks here, e.g., check if the user is an admin
      
    // Ensure that referenced Product documents exist
    const description = await Description.find();
    if (description.length === 0) {
      const randomDescriptions = generateRandomDescriptions();
      await Description.insertMany(randomDescriptions); 
       res.status(200).json({ message: "Descriptions populated successfully" });
    } else {
        throw error("Descriptions have already populated successfully")
    }
    // Generate and insert random descriptions
 
    // Update Product documents with random descriptions
    // for (let i = 0; i < products.length; i++) {
    //   const product = products[i];
    //   const randomDesc = randomDescriptions[i];
    //   const pushDescriptions2Products = product.Description.push(randomDesc) 
    //   pushDescriptions2Products;
    //   // Save the updated product document
    //   await product.save();
    //}
    res.status(200).json({ message: "Descriptions populated successfully" });
  } catch (error) {
    console.error("Error populating descriptions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/descriptions", async (req, res) => {
  try {
    const descriptions = await Description.find();
    res.status(200).json(descriptions);
  } catch (error) {
    console.error("Error fetching descriptions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
 

export default router;
