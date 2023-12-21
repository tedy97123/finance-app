import express from "express";
import mongoose from "mongoose";
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
// Specifically, remove the crossOriginResourcePolicy from Helmet for now as it might conflict with CORS
 //app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

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

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("connected to DB");
    app.listen(PORT, '0.0.0.0' , () => console.log(`Server Port: ${PORT}`));

    // Commented out the seeding logic for safety, consider moving to a separate script
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));

/* ERROR HANDLING MIDDLEWARE */
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
