// rootReducer.ts
import { combineReducers } from 'redux';
import productReducer, { ProductState } from './reducers'; // Import ProductState

export interface RootState {
  product: ProductState;
  // ... other reducers
}

const rootReducer = combineReducers({
  product: productReducer,
  // ... other reducers
});

export default rootReducer;
