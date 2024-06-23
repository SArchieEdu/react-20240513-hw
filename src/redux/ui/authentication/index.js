import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks/login";

export const authenticationSlice = createSlice({
  initialState: { user: null, token: null },
  extraReducers: (builder) =>
    builder.addCase(login.fulfilled, (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    }),
});
