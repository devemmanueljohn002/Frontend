import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice} from "@reduxjs/toolkit";
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

interface LoginDTO {
  email: string;
  password: string;
}

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

interface ResetPasswordDTO {
  token: string;
  newPassword: string;
}

export interface RejectError {
  message: string;
}

/* ================================
   Initial State
================================ */

export const initialState: AuthState = {
  user: undefined,
  loading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const login = createAsyncThunk<
  User,
  LoginDTO,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    return await loginAPI(payload);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Something went wrong");
  }
});

export const register = createAsyncThunk<
  User,
  RegisterDTO,
  { rejectValue: string }
>("auth/register", async (payload, { rejectWithValue }) => {
  try {
    return await registerAPI(payload);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Something went wrong");
  }
});

export const forgetPassword = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("auth/forgetPassword", async (email, { rejectWithValue }) => {
  try {
    return await forgetPasswordAPI(email);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Something went wrong");
  }
});

export const resetPassword = createAsyncThunk<
  void,
  ResetPasswordDTO,
  { rejectValue: string }
>("auth/resetPassword", async ({ token, newPassword }, { rejectWithValue }) => {
  try {
    return await resetPasswordAPI(token, newPassword);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Something went wrong");
  }
});
