import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../Features/auth/authSlice";
import productReducer from "../Features/products/productSlice";
import cartReducer from "../Features/cart/cartSlice";
import userReducer from "../hooks/user/userSlice";
import ordersReducer from "../Features/orders/ordersSlice";

/* =========================
   Root Reducer
========================= */
export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer, // ✅ Correct — NOT a component
});

/* =========================
   Root State Type
========================= */
export type RootState = ReturnType<typeof rootReducer>;

