import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, forgetPasswordAPI, resetPasswordAPI } from "./authAPI";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

interface AuthState {
  user?: User;
  loading: boolean;
  error?: string;
}

const initialState: AuthState = {
  user: undefined,
  loading: false,
  error: undefined,
};

// Async thunks
export const login = createAsyncThunk("auth/login", async (payload: any, { rejectWithValue }) => {
  try {
    return await loginAPI(payload);
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const register = createAsyncThunk("auth/register", async (payload: any, { rejectWithValue }) => {
  try {
    return await registerAPI(payload);
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const forgetPassword = createAsyncThunk("auth/forgetPassword", async (email: string, { rejectWithValue }) => {
  try {
    return await forgetPasswordAPI(email);
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, newPassword }: { token: string; newPassword: string }, { rejectWithValue }) => {
    try {
      return await resetPasswordAPI(token, newPassword);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      localStorage.removeItem("user");
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.loading = true; state.error = undefined; })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => { state.loading = false; state.user = action.payload; localStorage.setItem("user", JSON.stringify(action.payload)); })
      .addCase(login.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; })

      .addCase(register.pending, (state) => { state.loading = true; state.error = undefined; })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => { state.loading = false; state.user = action.payload; localStorage.setItem("user", JSON.stringify(action.payload)); })
      .addCase(register.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; })

      .addCase(forgetPassword.pending, (state) => { state.loading = true; state.error = undefined; })
      .addCase(forgetPassword.fulfilled, (state) => { state.loading = false; })
      .addCase(forgetPassword.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; })

      .addCase(resetPassword.pending, (state) => { state.loading = true; state.error = undefined; })
      .addCase(resetPassword.fulfilled, (state) => { state.loading = false; })
      .addCase(resetPassword.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
