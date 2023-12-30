import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ExpensesByCategory, Month, Day, AddProducts, GetProductsResponse, UpdateProductsResponse, GetTransactionsResponse, GetKpisResponse } from '../../types'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://desolate-wave-21722-b91d139fdee7.herokuapp.com/' }),
  reducerPath: 'main',
  endpoints: (builder) => ({
    getKpis: builder.query<GetKpisResponse, void>({
      query: () => 'kpi/kpis/',
    }),
    getProducts: builder.query<GetProductsResponse[], void>({
      query: () => 'product/products/',
    }),
    getTransactions: builder.query<GetTransactionsResponse[], void>({
      query: () => 'transaction/transactions/',
     
    }),
    addProducts: builder.mutation<UpdateProductsResponse, AddProducts>({
      query: (newProduct) => ({
        url: 'product/products/',
        method: 'POST',
        body: newProduct,
      }),
     
    }),
    updateProducts: builder.mutation<UpdateProductsResponse, UpdateProductsResponse>({
      query: (updatedProduct) => ({
        url: `product/products/${updatedProduct.id}`,
        method: 'PUT',
        body: updatedProduct,
      }),
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
  useAddProductsMutation, // Added mutation hook
  useUpdateProductsMutation, // Added mutation hook
} = api;

 
