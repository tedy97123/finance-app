export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface Products {
cellMode: string;
colDef: Object;
field: string;
formattedValue: string;
hasFocus: boolean
isEditable: boolean
row: Object;
rowNode: Object;
tabIndex: bigint;
value: string;
__v: 0,
_id:string,
createdAt:string, 
expense: "", 
id: string,
price: "",
transactions: [], 
updatedAt: ""
}

export interface ProductsTransactions {
cellMode: string;
colDef: Object;
field: string;
formattedValue: string;
hasFocus: boolean
id: string
isEditable: boolean
row: Object;
rowNode: Object;
tabIndex: bigint;
value: string;
}
 

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}



export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

