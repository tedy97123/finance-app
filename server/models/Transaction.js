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
      return val;  // store in cents
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

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
