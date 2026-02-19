import { useSelector, useDispatch } from "react-redux";
import type {AppDispatch } from "../store/store";
import type { RootState } from "../store/rootReducer";
import { logout } from "./user/userSlice";

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
