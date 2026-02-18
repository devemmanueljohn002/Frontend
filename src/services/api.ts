import type { Product } from "../types/product.types";
import type { User } from "../types/user.types";
import { axiosInstance } from "./axios";

// PRODUCTS
export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/products");
  return data.data;
};

export const fetchProductById = async (
  id: string
): Promise<Product> => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data.data;
};

// AUTH
export const loginUser = async (email: string, password: string) => {
  const { data } = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  return data;
};

export const registerUser = async (payload: Partial<User>) => {
  const { data } = await axiosInstance.post("/auth/register", payload);
  return data;
};
