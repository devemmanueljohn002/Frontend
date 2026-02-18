import axios from "axios";
import { API_URL } from "../utils/constants";
import { store } from "../store/store";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user?.user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Optional: Handle 401 globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized - maybe logout user");
    }
    return Promise.reject(error);
  }
);
