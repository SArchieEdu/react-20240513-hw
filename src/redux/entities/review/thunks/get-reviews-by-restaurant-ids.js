import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";

export const getReviewsByRestaurantIds = createAsyncThunk(
  "review/getReviewsByRestaurantIds",
  async ({ restaurantId }) => {
    const response = await fetch(
      `${BASE_ENDPOINT}/reviews?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestaurantReviewIds(
        state,
        restaurantId
      );
      console.log(restaurantReviewIds);

      return restaurantReviewIds.some(
        (reviewId) => !loadedReviewIds.includes(reviewId)
      );
    },
  }
);
