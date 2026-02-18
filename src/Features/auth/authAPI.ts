import { axiosInstance } from "../../services/axios";

interface AuthPayload {
  email: string;
  password?: string;
  name?: string;
  newPassword?: string;
  token?: string;
}

export const loginAPI = async (payload: AuthPayload) => {
  const { data } = await axiosInstance.post("/auth/login", payload);
  return data;
};

export const registerAPI = async (payload: AuthPayload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);
  return data;
};

export const forgetPasswordAPI = async (email: string) => {
  const { data } = await axiosInstance.post("/auth/forgot-password", { email });
  return data;
};

export const resetPasswordAPI = async (token: string, newPassword: string) => {
  const { data } = await axiosInstance.post("/auth/reset-password", {
    token,
    newPassword,
  });
  return data;
};
