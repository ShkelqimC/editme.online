import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchWrapper, getToken, removeToken, setToken } from "../_helpers";
import { history } from "../_helpers";
import ToastMessage from "../components/Alert";
// create slice
const baseUrl = `${process.env.REACT_APP_API_URL_HTTPS}/api/account`;

const user = JSON.parse(getToken()) || null;
const initialState = {
  loading: false,
  auth: user,
  error: null,
};
//authenticate user with email and password
export const login = createAsyncThunk("auth/login", async (payload) => {
  return await fetchWrapper.post(`${baseUrl}/authenticate`, payload);
});

//refresh token if user is logged in and token is valid and not expired
//TODO: this logic should be in middleware
//at the moment this logic is using with localstorage
export const refreshToken = createAsyncThunk("auth/refresh-token", async () => {
  var token = user?.jwtToken;
  //Check first access token class in .net core// shortcuts of isrevoked and isexpired might not work due shortcut defination
  const response = await fetchWrapper.post(`${baseUrl}/refresh-token`, { token: token });
  setToken(response);
  return response;
});

//forgot password send email
export const forgotPassword = createAsyncThunk("auth/forgot-password", async (payload) => {
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
  //   debugger
  //  var token= user?.jwtToken;
  // if(!token) console.log("token not found");
  // var result=await fetchWrapper.post(`${baseUrl}/revoke-token`, {token:token});
  // if(result?.isSuccess)
  // console.log("token revoked")
  // else
  // console.log("token not revoked",result)
  // removeToken();
});

//register user with email and password
export const registerUser = createAsyncThunk("auth/register", async (payload) => {
  debugger;
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
      removeToken();
      const { from } = history.location.state || { from: { pathname: "/" } };
      history.navigate(from);
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      setInterval(() => {
        refreshToken();
      }, 1000 * 60 * 7);
      setToken(action.payload);
      state.auth = action.payload;
      state.loading = false;
      ToastMessage("success", "Login Successfully");
      const { from } = history.location.state || { from: { pathname: "/" } };
      history.navigate(from);
    },
    [login.rejected]: (state, action) => {
      state.error = action.error;
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
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      // state.auth = action.payload;
      // localStorage.setItem("registeredUser", JSON.stringify(action.payload));
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      ToastMessage("error", "User Not Registered");
    },
    [verifyEmail.pending]: (state, action) => {
      state.loading = true;
    },
    [verifyEmail.fulfilled]: (state, action) => {
      state.auth = action.payload;
      ToastMessage("success", "User Registered");
      state.loading = false;
    },
    [verifyEmail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
