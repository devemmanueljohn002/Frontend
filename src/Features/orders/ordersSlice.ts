import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* =========================
   Types
========================= */
export interface Order {
  id: string;
  total: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

/* =========================
   Initial State
========================= */
const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

/* =========================
   Slice
========================= */
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
});

/* =========================
   Exports
========================= */
export const {
  setOrders,
  addOrder,
  setLoading,
  setError,
  clearOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer; // ✅ THIS is what Redux needs
