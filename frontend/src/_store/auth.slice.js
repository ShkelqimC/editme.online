import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchWrapper, getToken, removeToken, setToken } from "../_helpers";
import history from "../_helpers/history";
// create slice
const baseUrl = `${process.env.REACT_APP_API_URL_HTTPS}/api/account`;

const user = JSON.parse(getToken()) || null;
const initialState = {
  loading: false,
  auth: user,
};
//authenticate user with email and password
export const login = createAsyncThunk("auth/login", async (payload) => {
  debugger
  const response = await fetchWrapper.post(`${baseUrl}/authenticate`, payload);
  setToken(response);
  return response;
});

//refresh token if user is logged in and token is valid and not expired 
//TODO: this logic should be in middleware 
//at the moment this logic is using with localstorage
export const refreshToken = createAsyncThunk("auth/refresh-token", async () => {
  const response = await fetchWrapper.post(`${baseUrl}/refresh-token`);
  setToken(response);
  return response;
});

//forgot password send email
export const forgotPassword= createAsyncThunk("auth/forgot-password", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/forgot-password`, payload);
  return response;
});

//token sended with email to user, user can reset password
export const resetPassword = createAsyncThunk("auth/reset-password", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/reset-password`, payload);
  return response;
});

//revoking token
export const logout = createAsyncThunk("auth/signOut", async () => {
  debugger
  // var token = JSON.parse(getToken())?.jwtToken;
  // await fetchWrapper.post(`${baseUrl}/revoke-token`, { token });
  removeToken();
});

//register user with email and password
export const registerUser = createAsyncThunk("auth/register", async (payload) => {
  debugger
  const response = await fetchWrapper.post(`${baseUrl}/register`, payload);
  setToken(response);
  return response;
});

//then user get the token
export const verifyEmail = createAsyncThunk("auth/verify-email", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/verify-email`, payload);
  return response;
});

//if user loose verify token can want new token in user settings page
export const resendVerifyEmail = createAsyncThunk("auth/resend-verify-email", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/resend-verify-email`, payload);
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: {
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth = {};
      // state.auth?.jwtToken = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.auth = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [forgotPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.auth = action.payload;
      state.loading = false;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;