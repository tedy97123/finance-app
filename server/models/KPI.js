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

// Define daySchema
const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    expenses: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);

// Define monthSchema
const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    expenses: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    operationalExpenses: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    nonOperationalExpenses: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);

// Define KPISchema
const KPISchema = new Schema(
  {
    totalProfit: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    totalRevenue: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    totalExpenses: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Currency,
        get: (v) => (v / 100).toFixed(2),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// Create and export KPI model
const KPI = mongoose.model("KPI", KPISchema);
export default KPI;
