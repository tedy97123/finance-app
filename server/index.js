import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();

// Use Helmet for general security headers
app.use(helmet());

// Enable CORS for local development
app.use(cors());

// Request logging
app.use(morgan("common"));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGODB SETUP */
const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb+srv://tedyyohanes97:Peeman200@cluster1.vs1vunz.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(MONGO_URL);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    app.listen(PORT, '0.0.0.0', () => console.log(`Server Port: ${PORT}`));

    // Commented out the seeding logic for safety, consider moving to a separate script
    // await client.db("cluster1").dropDatabase();
    // await client.db("cluster1").collection("kpis").insertMany(kpis);
    // await client.db("cluster1").collection("products").insertMany(products);
    // await client.db("cluster1").collection("transactions").insertMany(transactions);

  } finally {
    // Ensure that the client will close when you finish/error
    // Do not close the connection here if you want the app to continue running
    // You may want to handle this differently in a production environment
  }
}

run().catch(console.dir);

/* ERROR HANDLING MIDDLEWARE */
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
