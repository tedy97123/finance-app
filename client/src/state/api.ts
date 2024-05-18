import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";
const localURL = "http://localhost:8000/";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const herokuURL = "https://finaical-08cf91646aec.herokuapp.com/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: herokuURL  }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions","Descriptions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }), 
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery  } = api
