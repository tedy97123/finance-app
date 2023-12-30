// productReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  productName: string;
  price: string;
  currencyType: string;
  expense: string;
}

const initialState: ProductState = {
  productName: '',
  price: '',
  currencyType: 'USD',
  expense: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setCurrencyType: (state, action: PayloadAction<string>) => {
      state.currencyType = action.payload;
    },
    setExpense: (state, action: PayloadAction<string>) => {
      state.expense = action.payload;
    },
    resetModal: (_state) => initialState,
  },
});

export const { setProductName, setPrice, setCurrencyType, setExpense, resetModal } = productSlice.actions;
export default productSlice.reducer;
