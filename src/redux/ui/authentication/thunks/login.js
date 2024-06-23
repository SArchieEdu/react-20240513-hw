import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "./selectors";

export const login = createAsyncThunk(
  "authentication/login",
  async () => {
    const response = await fetch("http://localhost:3001/api/login");

    return response.json();
  },
  {
    condition: (_, { getState }) => !selectToken(getState()),
  }
);
