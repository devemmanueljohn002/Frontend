import { Routes, Route, Navigate } from "react-router-dom";

import Products from "./Features/products/pages/Products";
import ProductPage from "./Features/products/pages/ProductPage";

import Login from "./Features/auth/pages/Login";
import Register from "./Features/auth/pages/Register";
import ForgetPassword from "./Features/auth/pages/ForgetPassword";
import ResetPassword from "./Features/auth/pages/ResetPassword";

import ProtectedRoute from "./Features/admin/ProtectedRoute";
import AdminRoute from "./Features/admin/AdminRoute";

import Cart from "./Features/cart/Cart";
import Orders from "./Features/orders/Orders";

import Dashboard from "./Features/admin/Dashboard";
import ManageProducts from "./Features/admin/ManageProducts";
import ManageOrders from "./Features/admin/ManageOrders";
import ManageUsers from "./Features/admin/ManageUsers";

const RouterConfig = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Protected User Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Route>

      {/* Catch-all */}
      <Route
        path="*"
        element={
          <div className="p-10 text-center text-2xl font-bold">
            404 | Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
