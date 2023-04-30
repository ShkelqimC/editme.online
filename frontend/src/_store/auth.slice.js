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
export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/authenticate`, payload);
  setToken(response);
  return response;
});

export const forgotPassword= createAsyncThunk("auth/forgot-password", async (payload) => {
  const response = await fetchWrapper.post(`${baseUrl}/reset-password`, payload);
  return response;
});
export const logout = createAsyncThunk("auth/signOut", async () => {
  var token = JSON.parse(getToken())?.jwtToken;
  await fetchWrapper.post(`${baseUrl}/revoke-token`, { token });
  removeToken();
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

//////////********************************************************** */

// const name = "auth";
// const initialState = createInitialState();
// const reducers = createReducers();
// const extraActions = createExtraActions();
// const slice = createSlice({ name, initialState, reducers });

// // exports

// export const authActions = { ...slice.actions, ...extraActions };
// export const authReducer = slice.reducer;

// // implementation

// function createInitialState() {
//   return {
//     // initialize state from local storage to enable user to stay logged in
//     value: getToken(),
//   };
// }

// function createReducers() {
//   return {
//     setAuth,
//   };

//   function setAuth(state, action) {
//     state.value = action.payload;
//   }
// }

// function createExtraActions() {
//   const baseUrl = `${process.env.REACT_APP_API_URL_HTTPS}/api/account`;
//   return {
//     login: login(),
//     logout: logout(),
//   };

//   function login() {
//     return createAsyncThunk(`${name}/login`, async function ({ email, password }, { dispatch }) {
//       dispatch(alertActions.clear());
//       try {
//         // debugger;
//         const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password });
//         // console.log("user", user);
//         // set auth user in redux state
//         dispatch(authActions.setAuth(user));

//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         setToken(user)

//         // TODO : fix alertActions or add tostify
//         // dispatch(alertActions.success('Login successful'));
//         // console.log("Login successful");

//         //TODO : history not working with app.js check later
//         // get return url from location state or default to home page
//         const { from } = history.location?.state || { from: { pathname: "/dashboard" } };
//         history.navigate(from);
//       } catch (error) {
//         // dispatch(alertActions.error(error));
//         console.log("Login error", error)
//       }
//     });
//   }

//   function logout() {
//     return createAsyncThunk(`${name}/logout`, function (arg, { dispatch }) {
//       dispatch(authActions.setAuth(null));
//       removeToken()
//       history.navigate("/");
//     });
//   }
// }
