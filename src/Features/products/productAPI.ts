import { axiosInstance } from "../../services/axios";
import type { Product } from "../../types/product.types";

// Fetch all products
export const fetchProductsAPI = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/products");
  return data.data;
};

// Fetch single product by ID
export const fetchProductByIdAPI = async (id: string): Promise<Product> => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data.data;
};
