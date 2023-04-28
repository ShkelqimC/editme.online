import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPublic, axiosPrivate } from "utils";

const modulePrefix = "account";

const initialState = {
  user: JSON.parse(localStorage?.getItem("EditMe-User-Info")) || null,
  email: "",
  password: "",
  success: false,
  error: false,
};

export const login = createAsyncThunk(`${modulePrefix}/`, async (_, { getState }) => {
  const state = getState();

  const res = await axiosPublic.post("login", {
    email: state.userData.email,
    password: state.userData.password,
  });

  return res.data;
});

export const logout = createAsyncThunk(`${modulePrefix}/logout`, async (_, { getState }) => {
  const state = getState();

  const res = await axiosPrivate.post(
    `logout`,
    {
      token: state.userData?.user?.refreshToken,
    },
    {
      headers: {
        authorization: `Bearer ${state.userData?.user?.accessToken}`,
      },
    }
  );

  return res.data;
});

export const deleteUser = createAsyncThunk(`${modulePrefix}/deleteUser`, async (id, { getState }) => {
  const state = getState();

  const res = await axiosPrivate.delete(`users/${id}`, {
    headers: { authorization: `Bearer ${state.userData.user?.accessToken}` },
  });

  return res.data;
});

export const refreshToken = createAsyncThunk(`${modulePrefix}/refreshToken`, async (_, { getState }) => {
  const state = getState();

  const res = await axiosPublic.post(`refresh`, {
    token: state.userData.user?.refreshToken,
  });

  const newUser = {
    ...state.userData.user,
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  };

  return newUser;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.username = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("EditMe-User-Info", JSON.stringify(action.payload));
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.removeItem("EditMe-User-Info");
        state.user = null;
        state.email = "";
        state.password = "";
        state.success = false;
        state.error = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.success = false;
        state.error = false;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.success = true;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.error = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        localStorage.setItem("EditMe-User-Info", JSON.stringify(action.payload));
        state.user = action.payload;
      });
  },
});

export const { updateUserName, updatePassword } = userSlice.actions;
