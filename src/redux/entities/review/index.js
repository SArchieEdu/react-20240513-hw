import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantIds } from "./thunks/get-reviews-by-restaurant-ids";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantIds.fulfilled,
      (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      }
    ),
});
