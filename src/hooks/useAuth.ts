import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Features/auth/authSlice";
import type { AppDispatch } from "../store/store";
import type { RootState } from "../store/rootReducer";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);

  const isAuthenticated = !!user;

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    logout: handleLogout,
  };
};
