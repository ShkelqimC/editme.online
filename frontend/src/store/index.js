import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "features";

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  },
});
