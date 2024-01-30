import mongoose from "mongoose";
import currency from "currency.js";

const Schema = mongoose.Schema;

// Define custom Currency type
class Currency extends mongoose.SchemaType {
  constructor(path, options) {
    super(path, options, 'Currency');
  }

  // Casting logic
  cast(val) {
    if (typeof val === 'number') {
      return val;  // already in cents
    }
    if (typeof val === 'string') {
      // Convert USD string to number in cents
      return Math.round(currency(val, { fromCents: false }).value * 100);
    }
    throw new Error('Currency: invalid value');
  }
}

// Registering our custom type in Mongoose
mongoose.Schema.Types.Currency = Currency;

const ProductSchema = new Schema(
  {
    price: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    expense: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    Description: {
      type: mongoose.Schema.Types.Array,
      ref: "Description",
    },
  },
  { timestamps: true }  // Removed { toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
