import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantIds } from "./thunks/get-dishes-by-restaurant-ids";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getDishesByRestaurantIds.fulfilled,
      (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      }
    ),
});
