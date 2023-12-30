// store.ts
import { configureStore, Middleware, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { api } from './slice/apiSlice';
import { RootState } from './rootReducer';

const middleware: Middleware[] = [api.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware as any),
});

export default store;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, any>;
