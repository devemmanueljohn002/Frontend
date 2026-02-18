import { combineReducers } from "@reduxjs/toolkit";

// Example slices (you'll create these later)
import userReducer from "../Features/auth/authSlice";
import productReducer from "../Features/products/productSlice";
import orderReducer from "../Features/orders/Orders";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
