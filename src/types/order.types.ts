import type { Product } from "./product.types";


export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  _id: string;
  user: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  createdAt: string;
}
