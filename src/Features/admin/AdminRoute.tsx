import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface AdminRouteProps {
  redirectTo?: string;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ redirectTo = "/" }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
