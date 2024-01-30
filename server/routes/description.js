import express from "express";
import Description from "../models/description.js";
import Product from "../models/Product.js";
import { faker } from '@faker-js/faker';

const router = express.Router();
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
    // Add authentication and authorization checks here, e.g., check if the user is an admin

    // Ensure that referenced Product documents exist
    const products = await Product.find();
    if (products.length === 0) {
      throw new Error("No products found. Populate products before running this script.");
    }

    // Generate and insert random descriptions
    const randomDescriptions = generateRandomDescriptions();
    await Description.insertMany(randomDescriptions);

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
