import { useEffect, useState } from "react";
import { getUserOrders } from "./orderAPI";
import { formatCurrency } from "../../utils/formatCurrency";
import type { Order } from "../../types/order.types";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getUserOrders().then(setOrders);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border p-4 rounded-lg mb-4"
        >
          <p>Status: {order.status}</p>
          <p>Total: {formatCurrency(order.totalAmount)}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
