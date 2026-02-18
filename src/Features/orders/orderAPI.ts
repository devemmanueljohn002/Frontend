import { axiosInstance } from "../../services/axios";
import type { Order } from "../../types/order.types";

export const createOrder = async (payload: any) => {
  const { data } = await axiosInstance.post("/orders", payload);
  return data;
};

export const getUserOrders = async (): Promise<Order[]> => {
  const { data } = await axiosInstance.get("/orders/my-orders");
  return data.data;
};
