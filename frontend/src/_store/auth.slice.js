import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { alertActions } from "./";
import { history, fetchWrapper } from "../_helpers";

// create slice

const name = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    value: JSON.parse(localStorage.getItem("auth")),
  };
}

function createReducers() {
  return {
    setAuth,
  };

  function setAuth(state, action) {
    state.value = action.payload;
  }
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL_HTTPS}/api/account`;
  return {
    login: login(),
    logout: logout(),
  };

  function login() {
    return createAsyncThunk(`${name}/login`, async function ({ email, password }, { dispatch }) {
      dispatch(alertActions.clear());
      try {
        // debugger;
        const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password });
        // console.log("user", user);
        // set auth user in redux state
        dispatch(authActions.setAuth(user));

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("auth", JSON.stringify(user));

        // TODO : fix alertActions or add tostify
        // dispatch(alertActions.success('Login successful'));
        // console.log("Login successful");

        //TODO : history not working with app.js check later
        // get return url from location state or default to home page
        const { from } = history.location.state || { from: { pathname: "/dashboard" } };
        history.navigate(from);
      } catch (error) {
        // dispatch(alertActions.error(error));
        console.log("Login error", error)
      }
    });
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`, function (arg, { dispatch }) {
      dispatch(authActions.setAuth(null));
      localStorage.removeItem("auth");
      history.navigate("/");
    });
  }
}
