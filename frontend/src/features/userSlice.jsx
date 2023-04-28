import { createAsyncThunk, createSlice }from "@reduxjs/toolkit";
import {axiosPublic,axiosPrivate} from "../_helpers/axiosUtils"

const modulePrefix = "account";

// Response body
// {
//   "id": 13,
//   "firstName": "string",
//   "lastName": "string",
//   "email": "shenolyalmazosman@gmail.com",
//   "role": "Admin",
//   "created": "2023-04-28T15:34:57.6909547",
//   "updated": null,
//   "isVerified": true,
//   "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzIiwibmJmIjoxNjgyNjk2MjE1LCJleHAiOjE2ODI2OTcxMTUsImlhdCI6MTY4MjY5NjIxNX0.untf1xQTOkJ2nxKUshPUzPIOXibidMc_Thm9FkNB6R4"
// }

// /api/account/authenticate  => login
// /api/account/refresh-token => refresh token
// /api/account/revoke-token  => logout
// /api/account/register      => register
// /api/account/verify-email  => verify email
// /api/account/forgot-password => forgot password
// /api/account/validate-reset-token => validate reset token
// /api/account/reset-password => reset password

// /api/account/ => admin only get all users
// /api/account/ => admin only create user
// /api/account/:id => get user by id
// /api/account/:id =>update user
// /api/account/:id => delete user

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const initialState = {
  user:
    JSON.parse(localStorage?.getItem("EditMe-User-Info")) || {
      accessToken: "",
      isAdmin: false,
      refreshToken: "",
      email: "",
    } ||
    null,
  email: "",
  password: "",
  success: false,
  error: false,
};

export const login = createAsyncThunk(`${modulePrefix}/`, async (_, { getState }) => {
  const state = getState();

  const res = await axiosPublic.post("authenticate", {
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

  const res = await axiosPrivate.delete(`account/${id}`, {
    headers: { authorization: `Bearer ${state.userData.user?.accessToken}` },
  });

  return res.data;
});

export const refreshToken = createAsyncThunk(`${modulePrefix}/refreshToken`, async (_, { getState }) => {
  const state = getState();

  //getCookie("refreshToken")

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
export default userSlice.reducer;
